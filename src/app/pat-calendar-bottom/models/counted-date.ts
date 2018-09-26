//a set of data representing a date
interface CountedDate {
  //what appears in the rendering of the calendar
    html: string;
    //month of the day
    month: number;
    //date of the day
    date: number;
    //year of the day
    year: number;
    //the css classes to be applied to this date
    type: string;
  }
  