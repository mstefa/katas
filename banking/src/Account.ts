import { Entry } from "./Entry"
import { TimeStamp } from "./TimeStamp"

export class Account {

  private statement = 'Date           Amount     Balance'

  private entries: Entry[] = []
  private balance: number = 0;


  constructor(
    private timeStampBuilder: TimeStampBuilder
  ) {

  }

  public printStatement(): string {

    const response = this.entries.map((entry) => entry.toEntryString()).join('')
    return this.statement + response
  }

  public deposit(amount: number): void {
    this.balance = this.balance + amount;
    this.entries.push(new Entry(this.timeStampBuilder.execute(), amount, this.balance))
  }

}



export interface TimeStampBuilder {
  execute(): TimeStamp
}
