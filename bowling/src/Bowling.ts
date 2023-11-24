enum Case {
  STRIKE = 'STRIKE',
  SPARE = 'SPARE',
  NONE = 'NONE'
}
interface Try {
  first: number,
  second: number,
  baseScore: number,
  case: Case
}


export class Bowling {
  constructor() {
  }

  run(lineScore: string) {

    const frames: string[] = lineScore.split(' ');

    const tries: Try[] = frames.map(frame => {
      if (frame[0] === 'X') {
        return { first: 10, second: 0, baseScore: 10, case: Case.STRIKE }
      }
      if (frame[1] === '/') {
        return { first: this.parseScore(frame[0]), second: 10 - this.parseScore(frame[0]), baseScore: 10, case: Case.SPARE }
      }
      if (!frame[1]) {
        return { first: this.parseScore(frame[0]), second: 0, baseScore: this.parseScore(frame[0]), case: Case.SPARE }
      }

      return { first: this.parseScore(frame[0]), second: this.parseScore(frame[1]), baseScore: this.parseScore(frame[0]) + this.parseScore(frame[1]), case: Case.NONE }

    })


    return this.CalculateScore(tries).reduce((accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    }, 0);;
  }

  private CalculateScore(tries: Try[]): number[] {
    const scores: number[] = []
    for (let i = 0; i < tries.length; i++) {
      if (tries[i].case === Case.SPARE) {
        if (!tries[i + 1]) {
          break
        }
        const score = tries[i].baseScore + tries[i + 1].first;
        scores.push(score)
      } else if (tries[i].case === Case.STRIKE) {
        if (!tries[i + 2]) {
          break
        }
        const score = tries[i].baseScore + tries[i + 1].baseScore + tries[i + 2].baseScore;
        scores.push(score)
      } else {
        scores.push(tries[i].baseScore)
      }
    }

    return scores;
  }

  private parseScore(input: string): number {
    if (input === '-') {
      return 0
    }

    if (input === 'x') {
      return 10
    }
    return parseInt(input)
  }
}
