

export class ChristmasLights {
  private light: number[][];

  constructor(rows: number, cols: number) {

    this.light = Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  public async getNumberOfLightOn() {
    console.log(this.light)
  }

  public getNumberOfLightOff(): number {
    return this.light.length * this.light[0].length
  }
}
