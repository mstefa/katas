export class DateMother {
  static createDate(day: number, month: number, year: number): Date {
    return new Date(year, month - 1, day); // Note: months are 0-indexed in JavaScript Date
  }
}
