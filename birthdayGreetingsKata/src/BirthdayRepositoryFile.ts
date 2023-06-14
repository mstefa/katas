import * as fs from 'fs';
import { BirthdayRepository, Friend } from "./BirthdayGreetings";

export class BirthdayRepositoryFile implements BirthdayRepository {
  constructor() {
  }

  fetch(date: Date): Promise<Friend[]> {
    console.log(date)
    let fileData
    try {
      const filename = '/Users/mstefanutti/personalws/katas/birthdayGreetingsKata/data/birthdays.csv';
      fileData = fs.readFileSync(filename, 'utf8');
    } catch (error) {
      console.error(error)
    }

    const algo = this.parseToObject(fileData as string)

    return new Promise<Friend[]>((resolve) => {
      resolve(algo)
    })
  }


  private parseToObject(dataString: string): Friend[] {
    const lines = dataString.split('\n');

    const objects: Friend[] = [];

    for (let i = 1; i < lines.length - 1; i++) {
      if (lines) {
        const values = lines[i].split(',').map(value => value.trim());
        const [year, month, day] = values[2].split('/');
        const date = new Date();
        date.setFullYear(parseInt(year));
        date.setMonth(parseInt(month));
        date.setDate(parseInt(day));

        const obj = {
          lastName: values[0],
          firstName: values[1],
          date: date,
          email: values[3],
        }

        objects.push(obj);
      }

    }

    return objects;
  }
}
