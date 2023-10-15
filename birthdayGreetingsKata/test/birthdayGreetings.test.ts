import { BirthdayGreetings, GreetingsSender } from "../src/BirthdayGreetings"
import { BirthdayRepositoryMock } from "./BirthdayRepositoryMock";
import { FriendMother } from "./FriendMother";
import { DateMother } from "./DateMother";
import { TodayDateRetrieverMock } from "./TodayDateRetrieverMock";

let birthdayGreetingsRepository: BirthdayRepositoryMock;
let mockedDateRetriever: TodayDateRetrieverMock;
let greetingsSenderMock: GreetingsSenderMock;

describe('Birthday Greetings', () => {

  beforeAll(() => {
    birthdayGreetingsRepository = new BirthdayRepositoryMock()
    mockedDateRetriever = new TodayDateRetrieverMock()
    greetingsSenderMock = new GreetingsSenderMock();
  })

  afterEach(() => {
    greetingsSenderMock.resetMock()
    birthdayGreetingsRepository.resetMock();
    mockedDateRetriever.resetMock();
  })

  test('send a note successfully when one friend', async () => {
    // Arrage
    const birthdayDate = DateMother.createDate(15, 5, 1980);
    const todayDate = DateMother.createDate(15, 5, 2000);
    const friends = FriendMother.random(1, birthdayDate);
    birthdayGreetingsRepository.setMockedFriends(friends);
    mockedDateRetriever.setMockedDate(todayDate)

    const birthdayGreetings = new BirthdayGreetings(
      birthdayGreetingsRepository,
      mockedDateRetriever,
      greetingsSenderMock
    );

    //Act
    await birthdayGreetings.run();

    //Assert
    greetingsSenderMock.assertMessagesSended([{
      identification: friends[0].email,
      messages: `Happy birthday, dear ${friends[0].firstName}!`
    }])

  })

  test('send a note successfully when mare than one friend', async () => {
    // Arrage
    const birthdayDate = DateMother.createDate(15, 5, 1980);
    const todayDate = DateMother.createDate(15, 5, 2000);
    const friends = FriendMother.random(2, birthdayDate);
    birthdayGreetingsRepository.setMockedFriends(friends);
    mockedDateRetriever.setMockedDate(todayDate)

    const birthdayGreetings = new BirthdayGreetings(
      birthdayGreetingsRepository,
      mockedDateRetriever,
      greetingsSenderMock
    );

    //Act
    await birthdayGreetings.run();

    //Assert
    greetingsSenderMock.assertMessagesSended([{
      identification: friends[0].email,
      messages: `Happy birthday, dear ${friends[0].firstName}!`
    },
    {
      identification: friends[1].email,
      messages: `Happy birthday, dear ${friends[1].firstName}!`
    }])

  })

  test('send a note successfully when one friend when his birthday is the 29 of February', async () => {
    // Arrage
    const birthdayDate = DateMother.createDate(29, 2, 1996);
    const todayDate = DateMother.createDate(28, 2, 2000);

    const friends = FriendMother.random(1, birthdayDate);
    birthdayGreetingsRepository.setMockedFriends(friends);
    mockedDateRetriever.setMockedDate(todayDate)

    const birthdayGreetings = new BirthdayGreetings(
      birthdayGreetingsRepository,
      mockedDateRetriever,
      greetingsSenderMock
    );

    //Act
    await birthdayGreetings.run();

    //Assert
    greetingsSenderMock.assertMessagesSended([{
      identification: friends[0].email,
      messages: `Happy birthday, dear ${friends[0].firstName}!`
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

  resetMock() {
    this.greetingSended = [];
  }

}



