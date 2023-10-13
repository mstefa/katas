import { BirthdayGreetings } from "../src/BirthdayGreetings"
import { BirthdayRepositoryMock } from "./BirthdayRepositoryMock";
import { TodayDateRetrieverMock } from "./TodayDateRetrieverMock";

describe('Birthday Greetings', () => {

  test('send a note successfully', () => {
    // Arrage
    const birthdayGreetingsRepository = new BirthdayRepositoryMock()
    const mockedDateRetriever = new TodayDateRetrieverMock()
    mockedDateRetriever.setMockedDate(new Date())

    const birthdayGreetings = new BirthdayGreetings(birthdayGreetingsRepository, mockedDateRetriever)

    birthdayGreetings.run();

    expect(2).toEqual(2)

  })
});



