export class NumberToLcd {
  constructor() {
  }

  convert(num: number) {

    const digits = {
      1: '\n  |\n  |',
      2: ' _ \n _| \n|_'
    }

    if (num === 1) {
      return digits[num];
    }

    if (num === 2) {
      return digits[num];
    }

    if (num == 12) {
      // return '    _\n  | _|\n  ||_ '
      return this.concatenateNumbers('   \n  |\n  |', ' _ \n _|\n|_ ')
    }

    // return digits[num];
    return this.concatenateNumbers('   \n  |\n  |', '\n  |\n  |')

  }

  private concatenateNumbers(num1: string, num2: string) {
    const num1Pice = num1.split('\n')
    const num2Pice = num2.split('\n')


    const array = num1Pice.map(function (value, index) {
      return value + num2Pice[index]
    })

    return array.join('\n')
  }



}


