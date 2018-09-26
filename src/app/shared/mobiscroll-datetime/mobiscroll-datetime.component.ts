import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mobiscroll-datetime',
  templateUrl: './mobiscroll-datetime.component.html',
  styleUrls: ['./mobiscroll-datetime.component.scss']
})
export class MobiscrollDatetimeComponent implements OnInit, OnChanges {
  @Input() datetimeVal: Date = new Date();
  @Input() minDate: Date = new Date("01/01/1900");
  @Input() maxDate: Date = new Date();
  @Input() onlyDate: boolean = false;
  @Input() onlyTime: boolean = false;
  @Input() defaultDatetime: boolean = false;
  @Input() dateWithPipe: boolean = false;
  @Input() placeholder: string;
  @Input() mbscName: string;
  @Input() classNames: string;

  mobiscrollDateTimeOptions: any;

  @Output() notify: EventEmitter<Date> = new EventEmitter<Date>();
  constructor() { }

  ngOnInit() {
    this.mobiscrollDateTimeOptions = {
      dateFormat: 'yy D M d',
      timeFormat: 'h:ii A',
      min: this.minDate,
      max: this.maxDate
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
  }

  focusDateVal() {
    this.notify.emit(this.datetimeVal);
  }
}