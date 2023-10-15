import { faker } from "@faker-js/faker";
import { Friend } from "../src/Friend";

export class FriendMother {

  static random(numberOfFriends: number, date: Date): Friend[] {
    const friends: Friend[] = [];

    for (let i = 0; i < numberOfFriends; i++) {
      const friend = new Friend(
        faker.person.lastName(),
        faker.person.firstName(),
        date,
        faker.internet.email()
      );
      friends.push(friend);
    }

    return friends;
  }

}

