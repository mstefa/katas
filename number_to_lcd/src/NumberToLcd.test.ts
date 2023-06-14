import { NumberToLcd } from "./NumberToLcd"

describe('test convert to LCD', () => {


  it('can handle 1', () => {
    const numberToLcd = new NumberToLcd()

    const recived = numberToLcd.convert(1);

    expect(recived).toEqual('\n  |\n  |')
  })

  it('can handle 2', () => {
    const numberToLcd = new NumberToLcd()

    const recived = numberToLcd.convert(2);

    expect(recived).toEqual(' _ \n _| \n|_')
  })

  it('can handle 11', () => {
    const numberToLcd = new NumberToLcd()

    const recived = numberToLcd.convert(11);

    expect(recived).toEqual('\n  |  |\n  |  |')
  })

  it('can handle 12', () => {
    const numberToLcd = new NumberToLcd()

    const recived = numberToLcd.convert(12);

    expect(recived).toEqual('    _\n  | _|\n  ||_ ')
  })
})
