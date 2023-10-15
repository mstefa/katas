import { BirthdayRepository } from "../src/BirthdayGreetings";
import { Friend } from "../src/Friend";

export class BirthdayRepositoryMock implements BirthdayRepository {

  private mockedFriends: Friend[] = []

  fetch(): Promise<Friend[]> {


    return new Promise((resolve, _) => {
      resolve(this.mockedFriends);
    });
  }

  setMockedFriends(friends: Friend[]) {
    this.mockedFriends = friends;
  }

  resetMock() {
    this.mockedFriends = [];
  }

}
