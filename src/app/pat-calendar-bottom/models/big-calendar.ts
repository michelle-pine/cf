import { CalendarType } from "./calendar-type";
import { Utils } from "./utils";
import { DateService } from "../services/date-service.service";

//Full Calendar Class
export class BigCalendar extends CalendarType {
  //a matrix of dates
  private dates: CountedDate[][] = [];

  constructor(dateService: DateService) {
    super(dateService);
  }

  //make/update all the calendar data
  generateCal() {
    this.dates = [];
    var temp_date = this.dateService.getTempDate();
    var firstDay = new Date(temp_date.getFullYear(), temp_date.getMonth(), 1);
    var startingDay = firstDay.getDay();
    var monthLength = this.dateService.calcLeapYear();
    var countDay = 1;

    // this loop is for weeks (rows)
    for (var i = 0; i < 9; i++) {
      var week: CountedDate[] = [];
      // this loop is for weekdays (cells)
      for (var j = 0; j <= 6; j++) {
        var newDay = new Date(
          temp_date.getFullYear(),
          temp_date.getMonth(),
          countDay
        );
        var today = new Date();
        var todayTime = today.getTime();
        var newTime = newDay.getTime();
        var htmlTxt = countDay + "";
        //check that the date is not out of the range of the month
        var dateCheck =
          countDay > monthLength || (countDay == 1 && j != firstDay.getDay());
        //set a date and record its information
        var setCountedDate = function(aMonth, aDate, aYear, aType) {
          let x: CountedDate = {
            html: htmlTxt,
            month: aMonth,
            date: aDate,
            year: aYear,
            type: "calendar-day" + aType
          };
          week.push(x);
        };
        //if it's an invalid date make sure it doesn't render
        if (dateCheck) {
          htmlTxt = "";
        }
        //highlight the selected date
        if (this.checkIfSelected(newDay) && !dateCheck) {
          setCountedDate(
            newDay.getMonth(),
            newDay.getDate(),
            newDay.getFullYear(),
            " can-select selected-date"
          );
          //highlight today's date
        } else if (Utils.sameDay(newDay, today)) {
          setCountedDate(
            newDay.getMonth(),
            newDay.getDate(),
            newDay.getFullYear(),
            " big-today can-select"
          );
          //make sure future dates are disabled
        } else if (newTime > todayTime) {
          setCountedDate(
            newDay.getMonth(),
            newDay.getDate(),
            newDay.getFullYear(),
            "calendar-day big-small-disabled"
          );
          //otherwise, a regularly colored date
        } else {
          setCountedDate(
            newDay.getMonth(),
            newDay.getDate(),
            newDay.getFullYear(),
            " can-select"
          );
        }
        //count through the days of the month until you reach the last day of the month
        if (countDay <= monthLength && (i > 0 || j >= startingDay)) {
          countDay++;
        }
      }
      this.dates.push(week);
      // stop making rows if we've run out of days
      if (countDay > monthLength) {
        break;
      }
    }
    return this.dates;
  }
}
