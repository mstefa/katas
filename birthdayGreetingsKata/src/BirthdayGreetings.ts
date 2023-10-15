import { Friend } from "./Friend";

export interface BirthdayRepository {
  fetch(): Promise<Friend[]>;
}

export interface DateRetriever {
  getDate(): Date;
}

export interface GreetingsSender {
  send(identification: string, greetings: string): Promise<void>;
}

class EmailGreetingsSender implements GreetingsSender {
  async send(email: string, greetings: string): Promise<void> {
    console.log(
      `Sending an email to: ${email} \n`,
      ' Subject: Happy birthday! \n',
      `body: ${greetings}`
    );
  }

}

export class BirthdayGreetings {
  private todayDateRetriever: DateRetriever;
  private birthdayRepository: BirthdayRepository;
  private emailGreetingsSender: EmailGreetingsSender;

  constructor(
    birthdayRepository: BirthdayRepository,
    todayDateRetriever: DateRetriever,
    emailGreetingsSender: EmailGreetingsSender
  ) {
    this.birthdayRepository = birthdayRepository;
    this.todayDateRetriever = todayDateRetriever;
    this.emailGreetingsSender = emailGreetingsSender
  }

  async run() {
    const today = this.todayDateRetriever.getDate();
    const friendList = await this.birthdayRepository.fetch();
    let todayBirthdayList = this.filterDateBirthday(friendList, today.getDate(), today.getMonth())

    if (this.isFebruary28th(today)) {
      const additionalBirthdayList = this.filterDateBirthday(friendList, 29, 1)
      todayBirthdayList = todayBirthdayList.concat(additionalBirthdayList);
    }

    todayBirthdayList.forEach((friend: Friend, _) => {
      this.emailGreetingsSender.send(friend.email, friend.generateMessage())
    })
  }

  private filterDateBirthday(friendList: Friend[], day: number, month: number) {

    return friendList.filter((friend) => {
      return (
        day === friend.birthdayDate.getDate() &&
        month === friend.birthdayDate.getMonth()
      )
    })

  }


  private isFebruary28th(date: Date): boolean {
    return date.getMonth() === 1 && date.getDate() === 28;
  }
}
