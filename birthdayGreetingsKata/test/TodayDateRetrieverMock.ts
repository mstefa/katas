import { DateRetriever } from "../src/BirthdayGreetings";

export class TodayDateRetrieverMock implements DateRetriever {
  private mockedDate: Date;

  constructor() {
    this.mockedDate = new Date();
  }

  getDate(): Date {
    return this.mockedDate;
  }

  setMockedDate(mockedDate: Date): void {
    this.mockedDate = mockedDate;
  }
}
