import { Injectable } from "@angular/core";
import { Utils } from "../models/utils";
import { PatCalendarBottomComponent } from "../pat-calendar-bottom.component";
import { DateFormComponent } from "../../data-entry/date-form/date-form.component";

@Injectable()
export class DateService {
  private selectedDate: Date;
  private selectedWeek: Date[] = [];
  private selectWeekAllowed: boolean = false;
  private cal: PatCalendarBottomComponent;
  private observers: DateFormComponent[] = [];
  private cal_days_labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  private cal_months_labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  //number of days in each month, in order
  private cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //this is the date that's going to affect the calendar
  //the temp date is date around which the calendar renders, separate from the
  //selected date, allowing the user to preview other dates without selecting them
  private temp_date = new Date();

  //this is today's date
  private today: Date = new Date();

  //whether or not weekly selection is enabled
  private weeklySelect: boolean = false;

  constructor() {
    this.selectedDate = Utils.getCleanDate(new Date());
    this.temp_date = new Date(
      this.temp_date.getFullYear(),
      this.temp_date.getMonth(),
      this.temp_date.getDate()
    );
    this.today = new Date(this.temp_date);
    for (var i = 0; i <= 6; i++) {
      var newDay = Utils.addDays(
        this.selectedDate,
        i - this.selectedDate.getDay()
      );
      this.selectedWeek.push(newDay);
    }
  }
  //adds an observing calendar
  addCalendar(cal: PatCalendarBottomComponent) {
    this.cal = cal;
  }

  //adds an observing form
  addObserver(observer: DateFormComponent) {
    this.observers.push(observer);
  }

  //sets a temp date from which the calendar is generated
  setTempDate(date: Date) {
    this.temp_date = date;
  }

  //sets the calendar's selected date
  setSelectedDate(date: Date) {
    if (date.getTime() <= this.today.getTime()) {
      this.selectedDate = date;
      this.selectedWeek = [];
      for (var i = 0; i <= 6; i++) {
        var newDay = Utils.addDays(
          this.selectedDate,
          i - this.selectedDate.getDay()
        );
        this.selectedWeek.push(newDay);
      }
      for (let entry of this.observers) {
        entry.update();
        this.updateCalendar();
      }
    }
  }


  //sets a selected week of the calendar
  setSelectedWeek(date: Date) {
    var newDay = Utils.addDays(date, 0 - date.getDay());
    this.setSelectedDate(newDay);
  }

  //updates the observing calendar
  updateCalendar() {
    this.cal.generate();
  }

  //updates the temp date from which the calendar is generated
  updateTempDate() {
    this.cal.setTempDate();
  }

  //determine if it's a leap year
  calcLeapYear() {
    var temp_year = this.temp_date.getFullYear();
    var temp_month = this.temp_date.getMonth();
    if (temp_month == 1) {
      if (
        (temp_year % 4 == 0 && temp_year % 100 != 0) ||
        temp_year % 400 == 0
      ) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return this.cal_days_in_month[temp_month];
    }
  }

  //moves the calendar forward depending on its size
  forward(s: String) {
    if (s == "medium") {
      var newDay = Utils.addDays(this.temp_date, 7);
      newDay = new Date(newDay.setDate(newDay.getDate() - newDay.getDay()));
      if (newDay.getTime() <= this.today.getTime()) {
        this.temp_date = newDay;
      }
    } else if (s == "big") {
      var newDay = new Date(this.temp_date);
      newDay.setMonth(this.temp_date.getMonth() + 1);
      newDay.setDate(1);
      if (newDay.getTime() <= this.today.getTime()) {
        this.temp_date = newDay;
      }
    } else if (s == "small") {
      var newDay = Utils.addDays(this.temp_date, 1);
      if (newDay.getTime() <= this.today.getTime()) {
        this.temp_date = newDay;
        this.setSelectedDate(newDay);
      }
    }
  }

  //moves the calendar backward depending on its size
  back(s: String) {
    if (s == "medium") {
      var newDay = Utils.addDays(this.temp_date, -7);
      if (newDay.getTime() <= this.today.getTime()) {
        this.temp_date = newDay;
      }
    } else if (s == "big") {
      var newDay = new Date(this.temp_date);
      newDay.setMonth(this.temp_date.getMonth() - 1);
      newDay.setDate(1);
      if (newDay.getTime() <= this.today.getTime()) {
        this.temp_date = newDay;
      }
    } else if (s == "small") {
      var newDay = Utils.addDays(this.temp_date, -1);
      if (newDay.getTime() <= this.today.getTime()) {
        this.temp_date = newDay;
        this.setSelectedDate(newDay);
      }
    }
  }

  //retrieves the calendar's selected date
  getSelectedDate() {
    return this.selectedDate;
  }

  //retrieves the calendar's selected week
  getSelectedWeek() {
    return this.selectedWeek;
  }

  //returns the name of a given month
  getMonthName(month: number) {
    return this.cal_months_labels[month];
  }

  //gets the temporary date of the calendar
  getTempDate() {
    return this.temp_date;
  }

  //tells whether weekly selection is permitted
  getSelectState() {
    return this.selectWeekAllowed;
  }

  //enables weekly calendar selection
  allowWeeklySelection(event) {
    this.selectWeekAllowed = true;
    this.setSelectedWeek(this.selectedDate);
  }

  //disables weekly calendar selection
  disableWeeklySelection(event) {
    this.selectWeekAllowed = false;
  }

  //maximizes the observing calendar on an event
  maximize(event) {
    this.cal.maximize(event);
  }
}
