import { BirthdayGreetings } from "./BirthdayGreetings"
import { BirthdayRepositoryFile } from "./BirthdayRepositoryFile"

const birthdayRepositoryFile = new BirthdayRepositoryFile
const birthdayGreetings = new BirthdayGreetings(birthdayRepositoryFile)
birthdayGreetings.run()
