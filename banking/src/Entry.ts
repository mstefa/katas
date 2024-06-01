import { TimeStamp } from "./TimeStamp";

export class Entry {
  readonly id: number

  constructor(
    private timeStamp: TimeStamp,
    private amount: number,
    private partialBalance: number

  ) {
    this.id = Math.random() * 10000;
  }

  toEntryString(): string {
    return `\n${this.timeStamp.toString()}    ${this.amount} ${this.partialBalance}`
  }

}
