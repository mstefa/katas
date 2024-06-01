
export class TimeStamp {
  constructor(
    readonly value: Date) {
  }

  toString(): string {
    const day = this.value.getDate();
    const month = this.value.getMonth() + 1; // Months are zero-based
    const year = this.value.getFullYear();

    // Pad day and month with leading zeros if necessary
    const dayString = day < 10 ? '0' + day : day.toString();
    const monthString = month < 10 ? '0' + month : month.toString();

    return `${dayString}/${monthString}/${year}`;
  }

}
