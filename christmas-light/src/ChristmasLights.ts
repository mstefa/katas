

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

  public turnOn(fromX: number, fromY: number, toX: number, toY: number): void {
    for (let x = fromX; x <= toX; x++) {
      for (let y = fromY; y <= toY; y++) {
        this.lights[x][y] = 1;
      }
    }
  }

  public turnOff(fromX: number, fromY: number, toX: number, toY: number): void {
    for (let x = fromX; x <= toX; x++) {
      for (let y = fromY; y <= toY; y++) {
        this.lights[x][y] = 0;
      }
    }
  }

  public toggle(fromX: number, fromY: number, toX: number, toY: number): void {
    for (let x = fromX; x <= toX; x++) {
      for (let y = fromY; y <= toY; y++) {
        this.lights[x][y] = this.lights[x][y] ? 0 : 1;
      }
    }
  }

  public printLightBulbs(): void {
    for (let i = 0; i < this.lights.length; i++) {
      let rowString = "";
      for (let j = 0; j < this.lights[i].length; j++) {
        rowString += this.lights[i][j] === 1 ? "💡" : "⚫️";
      }
      console.log(rowString);
    }
  }

}
