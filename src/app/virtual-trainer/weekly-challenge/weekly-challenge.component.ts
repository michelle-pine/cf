import { Component, OnInit } from '@angular/core';
import { WeeklyChallengeService } from './weekly-challenge.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weekly-challenge',
  templateUrl: './weekly-challenge.component.html',
  styleUrls: ['./weekly-challenge.component.scss']
})
export class WeeklyChallengeComponent implements OnInit {
  challenges;
  constructor(challenges:WeeklyChallengeService, private sanitizer:DomSanitizer, private router:Router) {
    this.challenges = challenges;
   }

  ngOnInit() {
    if (!this.challenges.selectedChallenge) {
      this.router.navigate(["/home"]);
    }
  }
  
  photoURL(string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }

}
