import { BirthdayGreetings, GreetingsSender } from "../src/BirthdayGreetings"
import { BirthdayRepositoryMock } from "./BirthdayRepositoryMock";
import { FriendMother } from "./FriendMother";
import { TodayDateRetrieverMock } from "./TodayDateRetrieverMock";

describe('Birthday Greetings', () => {

  test('send a note successfully', async () => {
    // Arrage
    const birthdayGreetingsRepository = new BirthdayRepositoryMock()
    const mockedDateRetriever = new TodayDateRetrieverMock()
    const greetingsSenderMock = new GreetingsSenderMock();
    const friends = FriendMother.random(1);
    birthdayGreetingsRepository.setMockedFriends(friends);
    mockedDateRetriever.setMockedDate(new Date())

    const birthdayGreetings = new BirthdayGreetings(
      birthdayGreetingsRepository,
      mockedDateRetriever,
      greetingsSenderMock
    );

    await birthdayGreetings.run();


    greetingsSenderMock.assertMessagesSended([{
      identification: friends[0].email,
      messages: friends[0].generateMessage()
    }])

  })
});

interface greetingsDto {
  identification: string,
  messages: string
}
class GreetingsSenderMock implements GreetingsSender {
  private greetingSended: greetingsDto[]

  constructor() {
    this.greetingSended = [];
  }

  async send(identification: string, messages: string): Promise<void> {
    console.log('mocked passing')
    this.greetingSended.push({
      identification,
      messages
    })
  }

  assertMessagesSended(expected: greetingsDto[]) {
    expect(this.greetingSended).toEqual(expected);
  }


}



