

export class ChristmasLights {
  private lights: number[][];
  private numberOfRows: number
  private numberOfCols: number

  constructor(rows: number, cols: number) {
    this.numberOfRows = rows
    this.numberOfCols = cols
    this.lights = Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  public lightsGrid() {
    return this.lights
  }

  public getNumberOfLightOn() {
    let count = 0;
    for (let x = 0; x < this.numberOfRows; x++) {
      for (let y = 0; y < this.numberOfCols; y++) {
        if (this.lights[x][y] === 1) {
          count++;
        }
      }
    }
    return count;
  }

  public getNumberOfLightOff(): number {
    let count = 0;
    for (let x = 0; x < this.numberOfRows; x++) {
      for (let y = 0; y < this.numberOfCols; y++) {
        if (this.lights[x][y] === 0) {
          count++;
        }
      }
    }
    return count;
  }

  public turnOn(fromX: number, fromY: number, toX: number, toY: number): void {
    for (let x = fromX; x <= toX; x++) {
      for (let y = fromY; y <= toY; y++) {
        this.lights[x][y] = 1;
      }
    }
  }

}
