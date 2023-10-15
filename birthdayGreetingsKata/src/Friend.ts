export class Friend {

  constructor(
    readonly lastName: string,
    readonly firstName: string,
    readonly birthdayDate: Date,
    readonly email: string,
  ) { }

  generateMessage(): string {
    return `Happy birthday, dear ${this.firstName}!`
  }



}
