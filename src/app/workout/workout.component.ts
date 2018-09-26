import { Component, OnInit } from '@angular/core';
import { DateService } from '../pat-calendar-bottom/services/date-service.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  constructor(private dateService:DateService) { 


  }

  ngOnInit() {
  }

  


}
