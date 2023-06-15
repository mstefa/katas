export class NumberToLcd {
  private cero = '   \n  |\n  |';
  private one = '   \n  |\n  |';
  private two = ' _ \n _|\n|_ '
  private digits = [this.cero, this.one, this.two]
  constructor() {
  }

  convert(num: number) {


    if (num < 10) {
      const output = this.digits[num];
      console.log(output)
      return output;
    }
    const digitArray = this.getEachDigitFromNumber(num);
    const output = this.concatenateMultipleDigitsNumbers(digitArray)
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


  private concatenateMultipleDigitsNumbers(digitArray: number[]): string {
    let response: string = this.concatenateNumbers(this.digits[digitArray[0]], this.digits[digitArray[1]]);
    for (let i = 2; i < digitArray.length; i++) {
      response = this.concatenateNumbers(response, this.digits[digitArray[i]]);
    }

    return response;
  }

}


