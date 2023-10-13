import { Friend } from "./Friend";

export interface BirthdayRepository {
  fetch(date: Date): Promise<Friend[]>;
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
    const friendList = await this.birthdayRepository.fetch(today);
    console.log(friendList)
    friendList.forEach((friend: Friend, _) => {
      this.emailGreetingsSender.send(friend.email, friend.generateMessage())
    })
  }
}
