import { Component, OnInit } from "@angular/core";
import { DateService } from "../../pat-calendar-bottom/services/date-service.service";

@Component({
  selector: "app-date-form",
  templateUrl: "./date-form.component.html",
  styleUrls: ["./date-form.component.scss"]
})
export class DateFormComponent implements OnInit {
  private selectedDate: Date;
  private dateService: DateService;
  private today: Date = new Date();

  constructor(dateService: DateService) {
    this.dateService = dateService;
    this.today = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDate()
    );
    this.selectedDate = this.dateService.getSelectedDate();
   
  }

  ngOnInit() {
    this.dateService.addObserver(this);
  }



  selectDate(value:Date) {
    if (value.getTime() <= this.today.getTime()) {
      this.selectedDate = value;
      this.dateService.setSelectedDate(this.selectedDate);
      this.dateService.updateTempDate();
      this.dateService.updateCalendar();
      
    }
    else {
      this.selectedDate = new Date(this.today);
      this.dateService.setSelectedDate(this.selectedDate);
      this.dateService.updateTempDate();
      this.dateService.updateCalendar();
    }
 
  }



  update() {
    this.selectedDate = (this.dateService.getSelectedDate());
  }

  

  prompt(event) {
    this.dateService.maximize(event);
  }
}
