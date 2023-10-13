import { DateRetriever } from "./BirthdayGreetings";

export class TodayDateRetriever implements DateRetriever {
  constructor() {
  }

  getDate(): Date {
    return new Date();
  }
}
