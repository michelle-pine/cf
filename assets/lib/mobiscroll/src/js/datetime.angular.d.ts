import { MbscScrollerBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/datetime';
import { MbscDatetimeOptions } from './core/core';
export declare abstract class MbscDatetimeBase extends MbscScrollerBase {
    defaultValue: Date | Array<Date>;
    invalid: Array<string | {
        start: Date;
        end: Date;
        d?: string;
    } | Date>;
    max: Date;
    min: Date;
    steps: {
        hour?: number;
        minute?: number;
        second?: number;
        zeroBased?: boolean;
    };
    valid: Array<string | {
        start: Date;
        end: Date;
        d?: string;
    } | Date>;
    ampmText: string;
    amText: string;
    dateFormat: string;
    dateWheels: string;
    dayNames: Array<string>;
    dayNamesShort: Array<string>;
    dayText: string;
    hourText: string;
    minuteText: string;
    monthNames: Array<string>;
    monthNamesShort: Array<string>;
    monthSuffix: string;
    monthText: string;
    nowText: string;
    pmText: string;
    secText: string;
    timeFormat: string;
    timeWheels: string;
    yearSuffix: string;
    yearText: string;
    inlineOptions(): MbscDatetimeOptions;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscDateBase extends MbscDatetimeBase {
    optionService: MbscOptionsService;
    options: MbscDatetimeOptions;
    protected preset: string;
    value: Date;
    onChangeEmitter: EventEmitter<Date>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
}
export declare class MbscDate extends MbscDateBase {
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscDateComponent extends MbscDate {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscDatetimeOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscTime extends MbscDateBase {
    value: Date;
    onChangeEmitter: EventEmitter<Date>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscTimeComponent extends MbscTime {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscDatetimeOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscDatetime extends MbscDateBase {
    value: Date;
    onChangeEmitter: EventEmitter<Date>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscDatetimeComponent extends MbscDatetime {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscDatetimeOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
