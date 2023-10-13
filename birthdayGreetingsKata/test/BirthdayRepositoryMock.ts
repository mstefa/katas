import { BirthdayRepository, Friend } from "../src/BirthdayGreetings";

export class BirthdayRepositoryMock implements BirthdayRepository {

  fetch(date: Date): Promise<Friend[]> {
    return new Promise((resolve, _) => {
      resolve(
        [{
          lastName: 'string',
          firstName: 'string',
          date,
          email: 'string',
        }]
      );
    });
  }

}
