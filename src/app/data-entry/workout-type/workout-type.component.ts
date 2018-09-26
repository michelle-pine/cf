import { Component, OnInit } from '@angular/core';
import { DateService } from '../../pat-calendar-bottom/services/date-service.service';

@Component({
  selector: 'app-workout-type',
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss']
})
export class WorkoutTypeComponent implements OnInit {
  dateService:DateService;

  constructor(dateService:DateService) {
    this.dateService = dateService;
   }

  ngOnInit() {
  }

}
