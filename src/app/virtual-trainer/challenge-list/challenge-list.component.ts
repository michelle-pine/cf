import { Component, OnInit } from '@angular/core';
import { WeeklyChallengeService } from '../weekly-challenge/weekly-challenge.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {
  challenges;
  constructor(challenges:WeeklyChallengeService) {
    this.challenges = challenges;
   }


  ngOnInit() {
  }

}
