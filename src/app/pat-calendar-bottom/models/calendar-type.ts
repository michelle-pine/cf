
import { Calendar } from "./calendar";
import { DateService } from "../services/date-service.service";
import { Utils } from "./utils";

//an abstract calendar class
export abstract class CalendarType implements Calendar {
  protected dateService:DateService;

  constructor(dateService:DateService) {
    this.dateService = dateService;
  }

  //generates a calendar based on its unique attributes
  abstract generateCal();

  //set the data of the calendar
  setDateData(dateService: DateService) {
    this.dateService = dateService;
  }

  //verifies if a date is selected on the calendar
  protected checkIfSelected(date:Date) {
    var singleSelect = Utils.sameDay(date, this.dateService.getSelectedDate());
    var weeklySelect = this.dateService.getSelectState();
    if (!weeklySelect) {
      return singleSelect;
    }
    else {
      var selectWeek = this.dateService.getSelectedWeek();
      for (var i = 0; i <= 6; i++) {
        if (Utils.sameDay(selectWeek[i], date)) {
          return true;
        }
      }
    }
  }
 
}
