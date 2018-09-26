import { Component, OnInit } from "@angular/core";
import { DateService } from "../../pat-calendar-bottom/services/date-service.service";
import { SliderData } from "./slider-data";

@Component({
  selector: "app-start-entry",
  templateUrl: "./start-entry.component.html",
  styleUrls: ["./start-entry.component.scss"]
})
export class StartEntryComponent implements OnInit {
  private selectedDate: Date;
  link: string;
  dateString: string;
  todayEmotion: number = 5;
  slider:SliderData = new SliderData();


  constructor(private service: DateService) {
    if (service.getSelectState()) {
      this.link = "/workout/weekly-entry";
      this.dateString = "Week of workout(s)";
    } else {
      this.link = "/workout/daily-entry";
      this.dateString = "Date of workout(s)";
    }
  }


  ngOnInit() {}
}
