import { CalendarType } from "./calendar-type";
import { Utils } from "./utils";
import { DateService } from "../services/date-service.service";

//a model for a half-calendar
export class MediumCalendar extends CalendarType {
  private week: CountedDate[] = [];

  constructor(dateService:DateService) {
    super(dateService);
  }

  //generates an array representing a week of dates
  generateCal() {
    var aWeek: CountedDate[] = [];
    var temp_date = this.dateService.getTempDate();
    //set the dates for each day of the week
    for (var i = 0; i <= 6; i++) {
      var newDay = Utils.addDays(temp_date, i - temp_date.getDay());
      var newTime = newDay.getTime();
      var newDate = newDay.getDate();
      var today = new Date();
      var todayTime = today.getTime();
      var htmlTxt = newDay.getDate() + "";
      //a convenience function for creating a counted date interface
      var setCountedDate = function(aMonth, aDate, aYear, aType) {
        let x: CountedDate = {
          html: htmlTxt,
          month: aMonth,
          date: aDate,
          year: aYear,
          type: "date d-flex justify-content-center align-items-center " + aType
        };
        aWeek.push(x);
      };
      //check if the date is the selected date, and highlight if so
      if (this.checkIfSelected(newDay)) {
        setCountedDate(
          newDay.getMonth(),
          newDay.getDate(),
          newDay.getFullYear(),
          " can-select selected-date"
        );
        //check if the date is today and highlight if so
      } else if (Utils.sameDay(newDay, today)) {
        setCountedDate(
          newDay.getMonth(),
          newDay.getDate(),
          newDay.getFullYear(),
          " today can-select"
        );
        //disable future dates
      } else if (newTime > todayTime) {
        setCountedDate(
          newDay.getMonth(),
          newDay.getDate(),
          newDay.getFullYear(),
          " disabled"
        );
        //render past dates as clickable
      } else {
        //otherwise, a regularly colored date
        setCountedDate(
          newDay.getMonth(),
          newDay.getDate(),
          newDay.getFullYear(),
          " can-select"
        );
      }
    }
    this.week = aWeek;
    return this.week;
  }


}
