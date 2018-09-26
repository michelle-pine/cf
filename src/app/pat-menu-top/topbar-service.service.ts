import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../pat-calendar-bottom/services/date-service.service';

@Injectable()
export class TopbarService {
  link:string;
  html:string;
  show:boolean;
  class:string;
  func:any;
  

  constructor(private router: Router, private dateService:DateService) { 
    this.link = "";
    this.html = "";
    this.show = false;
    this.func = function(event) {

    };

    router.events.subscribe(val => {
      if (this.router.url.indexOf("select-activity") > 0) {
        this.show = true;
        this.html = "Next";
        if (dateService.getSelectState()) {
          this.link = '/workout/weekly-entry';

        }
        else {
          this.link = '/workout/daily-entry';

        }
        this.func = function(event) {

        };
  
      }
      else if (this.router.url.indexOf("daily-entry") > 0 || this.router.url.indexOf("weekly-entry") > 0) {
        this.show = true;
        this.html = "Submit";
        this.link = "/workout/workout-history"
        this.func = function(event) {
          this.dateService.allowWeeklySelection(event);
          console.log("okay");
        }
      }
      else {
        this.show = false;
        this.func = function(event) {

        };
      }
  
    });
  }

  clickFunc(event) {
    this.func(event);
  }

  

}
