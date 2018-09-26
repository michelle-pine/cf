//static utility functions
export class Utils {
  //checks if two dates are the same
  public static sameDay(d1, d2) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  //given a date, return a new date that is a number of days from the given one
  //adjusted for time zone offset
  public static addDays(date, amount) {
    var tzOff = date.getTimezoneOffset() * 60 * 1000,
      t = date.getTime(),
      d = new Date(),
      tzOff2;

    t += 1000 * 60 * 60 * 24 * amount;
    d.setTime(t);

    tzOff2 = d.getTimezoneOffset() * 60 * 1000;
    if (tzOff != tzOff2) {
      var diff = tzOff2 - tzOff;
      t += diff;
      d.setTime(t);
    }

    return d;
  }

  //returns a date with a 00:00:00 time stamp, important for determining date equality
  public static getCleanDate(date:Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
