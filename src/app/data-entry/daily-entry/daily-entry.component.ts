import { Component, OnInit } from "@angular/core";
import { SliderData } from "../start-entry/slider-data";

@Component({
  selector: "app-daily-entry",
  templateUrl: "./daily-entry.component.html",
  styleUrls: ["./daily-entry.component.scss"]
})
export class DailyEntryComponent implements OnInit {
  private selectedDate: Date;
  link: string;
  dateString: string;
  workoutFeeling: number = 5;
  workoutIntensity: number = 13;
  slider:SliderData = new SliderData();


  constructor() {}

  ngOnInit() {}
}
