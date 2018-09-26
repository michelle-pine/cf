import { Component, OnInit } from "@angular/core";
import { BigCalendar } from "./models/big-calendar";
import { MediumCalendar } from "./models/medium-calendar";
import { SmallCalendar } from "./models/small-calendar";
import { DateService } from "./services/date-service.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "pat-calendar-bottom",
  templateUrl: "./pat-calendar-bottom.component.html",
  styleUrls: ["./pat-calendar-bottom.component.scss"]
})
export class PatCalendarBottomComponent implements OnInit {
  today: Date = new Date();
  bigCal: BigCalendar;
  medCal: MediumCalendar;
  smallCal: SmallCalendar;
  calSetting = "medium";
  selectedDate: Date;
  cal1;
  cal2;
  cal3;
  addedSmallClass: string = "hide";
  addedMedClass: string = "";
  addedBigClass: string = "hide";
  addedMinClass: string = "";
  addedMaxClass: string = "";
  month: String;
  year: number;
  selectWeek: boolean;
  dateService: DateService;

  constructor(dateService: DateService, private router: Router) {
    this.dateService = dateService;
    this.selectedDate = this.dateService.getSelectedDate();
    this.bigCal = new BigCalendar(this.dateService);
    this.medCal = new MediumCalendar(this.dateService);
    this.smallCal = new SmallCalendar(this.dateService);
    this.generate();
    router.events.subscribe(val => {
      if (this.router.url.indexOf("workout") < 0) {
        this.dateService.disableWeeklySelection(val);
        
      }
      this.generate();
    });
  }

  ngOnInit() {
    this.dateService.addCalendar(this);
  }

  setTempDate() {
    this.dateService.setTempDate(this.dateService.getSelectedDate());
  }

  minimize(event) {
    this.setTempDate();
    this.generate();
    if (this.addedSmallClass == "hide" && this.addedBigClass == "hide") {
      this.addedSmallClass = "";
      this.addedMedClass = "hide";
      this.addedMinClass = "remove";
      this.calSetting = "small";
      this.dateService.setTempDate(this.dateService.getSelectedDate());
      this.generate();
    }
    if (this.addedMedClass == "hide" && this.addedBigClass == "") {
      this.addedMedClass = "";
      this.addedMaxClass = "";
      this.addedBigClass = "hide";
      this.calSetting = "medium";
    }
  }

  

  maximize(event) {
    this.setTempDate();
    this.generate();
    if (this.addedSmallClass == "hide" && this.addedBigClass == "hide") {
      this.addedMedClass = "hide";
      this.addedBigClass = "";
      this.addedMaxClass = "remove";
      this.calSetting = "big";
    }
    if (this.addedMedClass == "hide" && this.addedBigClass == "hide") {
      this.addedMedClass = "";
      this.addedSmallClass = "hide";
      this.addedMinClass = "";
      this.calSetting = "medium";
    }
  }

  forward(event) {
    this.dateService.forward(this.calSetting);
    this.generate();
  }

  backward(event) {
    this.dateService.back(this.calSetting);
    this.generate();
  }

  generate() {
    this.cal3 = this.smallCal.generateCal();
    this.cal1 = this.bigCal.generateCal();
    this.cal2 = this.medCal.generateCal();
    this.month = this.dateService.getMonthName(this.dateService.getTempDate().getMonth());
    this.year = this.dateService.getTempDate().getFullYear();

  }


  selectDate(event, month, date, year) {
    if (this.dateService.getSelectState()) {
      this.dateService.setSelectedWeek(new Date(year, month, date));
    } else {
      this.dateService.setSelectedDate(new Date(year, month, date));
    }
    this.generate();
  }

  setToday(event) {
    this.selectDate(
      event,
      this.today.getMonth(),
      this.today.getDate(),
      this.today.getFullYear()
    );
    this.dateService.setTempDate(
      new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate()
      )
    );
    this.generate();
  }

  goToWorkout(event) {
    if (this.router.url.indexOf("workout") < 0) {
      this.router.navigateByUrl("/workout");
    }
  }
}
