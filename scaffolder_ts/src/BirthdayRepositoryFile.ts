// import fs from 'fs'
import { BirthdayRepository, Friend } from "./BirthdayGreetings";

export class BirthdayRepositoryFile implements BirthdayRepository {
  constructor() {
  }

  fetch(date: Date): Promise<[Friend]> {

    // const data = fs.readFile('..data/birthdays.csv', 'utf8')
    const dateString = '1982/10/08';
    const [year, month, day] = dateString.split('/');
    const daten = new Date();
    daten.setFullYear(parseInt(year));
    daten.setMonth(parseInt(month));
    daten.setDate(parseInt(day));


    const response = {
      lastName: 'Doe',
      firstName: 'John',
      date: daten,
      email: 'string',
    }
    return new Promise<[Friend]>((resolve) => {
      resolve([response])
    })
  }
}
