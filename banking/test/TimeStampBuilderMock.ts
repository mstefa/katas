import { TimeStampBuilder } from "../src/Account";
import { TimeStamp } from "../src/TimeStamp";

export class TimeStampBuilderMock implements TimeStampBuilder {

  private mockedDate: Date = new Date;

  constructor() {

  }
  execute(): TimeStamp {
    // return new TimeStamp(new Date)
    return new TimeStamp(this.mockedDate)
  }

  mockDate(day: number, month: number, year: number) {
    this.mockedDate = new Date(year, month - 1, day);
  }
}
