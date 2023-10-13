export class Friend {

  constructor(
    readonly lastName: string,
    readonly firstName: string,
    readonly date: Date,
    readonly email: string,
  ) { }

  generateMessage(): string {
    return `Happy birthday, dear ${this.firstName}!`
  }



}
