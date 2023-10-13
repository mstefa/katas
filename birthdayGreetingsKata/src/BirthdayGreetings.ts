export interface BirthdayRepository {
  fetch(date: Date): Promise<Friend[]>;
}


export interface DateRetriever {
  getDate(): Date;
}

export interface Friend {
  lastName: string,
  firstName: string,
  date: Date
  email: string,
}

export class BirthdayGreetings {
  private todayDateRetriever: DateRetriever;
  private birthdayRepository: BirthdayRepository;

  constructor(birthdayRepository: BirthdayRepository, todayDateRetriever: DateRetriever) {
    this.birthdayRepository = birthdayRepository;
    this.todayDateRetriever = todayDateRetriever;
  }

  async run() {
    const today = this.todayDateRetriever.getDate();
    const friendList = await this.birthdayRepository.fetch(today);
    console.log(friendList)
  }
}
