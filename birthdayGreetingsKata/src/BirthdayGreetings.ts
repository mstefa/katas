export interface BirthdayRepository {
  fetch(date: Date): Promise<Friend[]>;
}

export interface Friend {
  lastName: string,
  firstName: string,
  date: Date
  email: string,
}

export class BirthdayGreetings {
  birthdayRepository: BirthdayRepository;
  constructor(birthdayRepository: BirthdayRepository) {
    this.birthdayRepository = birthdayRepository;
  }

  async run() {
    const today = new Date;
    const friendList = await this.birthdayRepository.fetch(today);
    console.log(friendList)
  }
}
