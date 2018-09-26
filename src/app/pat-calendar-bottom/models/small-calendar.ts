
import { CalendarType } from "./calendar-type";
import { Utils } from "./utils";
import { DateService } from "../services/date-service.service";

//a model for a small, one day calendar
export class SmallCalendar extends CalendarType {
  //the single date in the calendar
  private singleDate: CountedDate;


  //automatically sets the first date to today
  constructor(dateService:DateService) {
    super(dateService);
  }


  

  generateCal() {
    var temp = this.dateService.getTempDate();

    var today = new Date();
    var type = "";

    if (temp.getTime() > today.getTime()) {
      this.dateService.setTempDate(this.dateService.getSelectedDate());
      temp = this.dateService.getTempDate();
    }
    if (Utils.sameDay(temp, today)) {
      type = "text-primary";
    }
    let x: CountedDate = {
      html:
        this.dateService.getMonthName(temp.getMonth()) +
        " " +
        temp.getDate() +
        ", " +
        temp.getFullYear(),
      month: temp.getMonth(),
      date: temp.getDate(),
      year: temp.getFullYear(),
      type: type
    };
    this.singleDate = x;
    return this.singleDate;
  }
}
