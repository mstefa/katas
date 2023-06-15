export class NumberToLcd {
  constructor() {
  }

  convert(num: number) {

    const one = '   \n  |\n  |';
    const two = ' _ \n _|\n|_ '
    const digits = [one, two]

    if (num < 10) {
      const output = digits[num - 1];
      console.log(output)
      return output;
    }
    const digitArray = this.getEachDigitFromNumber(num);
    const output = this.concatenateNumbers(digits[digitArray[0] - 1], digits[digitArray[1] - 1])
    console.log(output)
    return output;

  }

  private concatenateNumbers(num1: string, num2: string) {
    const num1Pice = num1.split('\n')
    const num2Pice = num2.split('\n')


    const array = num1Pice.map((value, index) => {
      return value + num2Pice[index]
    })

    return array.join('\n')
  }

  private getEachDigitFromNumber(number: number): number[] {
    const numberString = number.toString();
    const stringArray = numberString.split('');
    const digitsArray = stringArray.map((e) => parseInt(e))
    return digitsArray
  }



}


