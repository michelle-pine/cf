import { Component, OnInit, OnChanges } from '@angular/core';
import { DateService } from '../../pat-calendar-bottom/services/date-service.service';
import { SliderData } from '../start-entry/slider-data';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent implements OnInit, OnChanges {
  
  faces:SliderData = new SliderData();

  constructor(private dateService:DateService) { }

  updateSmileys() {
    for (var i = 1; i <= this.faces.emotions.length; i++) {
      let smiley = document.getElementById('smiley' + i);
      if (smiley !== null) {
        smiley.innerHTML = this.faces.emotions[i - 1];
      }
    }
    // let smiley1 = document.getElementById('smiley1');
    // smiley1.innerHTML = this.faces.saddest;
    // let smiley2 = document.getElementById('smiley2');
    // smiley2.innerHTML = this.faces.sad;
    // let smiley3 = document.getElementById('smiley3');
    // smiley3.innerHTML = this.faces.meh;
    // let smiley4 = document.getElementById('smiley4');
    // smiley4.innerHTML = this.faces.happy;
    // let smiley5 = document.getElementById('smiley5');
    // if (smiley5 !== null)
    // smiley5.innerHTML = this.faces.happiest;
  }

  ngOnInit() {
    this.updateSmileys();
  }

  ngOnChanges() {
    this.updateSmileys();
  }

}
