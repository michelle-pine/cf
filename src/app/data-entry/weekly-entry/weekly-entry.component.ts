import { Component, OnInit} from '@angular/core';
import { SliderData } from '../start-entry/slider-data';

@Component({
  selector: 'app-weekly-entry',
  templateUrl: './weekly-entry.component.html',
  styleUrls: ['./weekly-entry.component.scss']
})
export class WeeklyEntryComponent implements OnInit {
  private selectedDate: Date;
  link: string;
  dateString: string;
  workoutFeeling: number = 5;
  workoutIntensity: number = 13;
  slider:SliderData = new SliderData();

  constructor() { }

  ngOnInit() {
    
  }

}
