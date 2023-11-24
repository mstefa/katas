import { Bowling } from "../src/Bowling"


describe('test bowling', () => {

  test('call with simple score', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('81 81 81 81 81 81 81 81 81 81')

    // Assert
    expect(points).toEqual(90)

  })

  test('call with cero score', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('-- -- -- 1- 11 -1 11 11 11 11')

    // Assert
    expect(points).toEqual(12)

  })

  test('call with spare score in the first tries', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('-/ 1- -- -- -- -- -- -- -- --')

    // Assert
    expect(points).toEqual(12)

  })

  test('call with strike score in the first tries, follow by one hit', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('X 1- -- -- -- -- -- -- -- --')

    // Assert
    expect(points).toEqual(12)

  })

  test('call with strike score in the first tries, follow by two hit', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('X 11 -- -- -- -- -- -- -- --')

    // Assert
    expect(points).toEqual(14)

  })

  test('call with strike score in the first tries, follow by other strike', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('X X 1- -- -- -- -- -- -- --')

    // Assert
    expect(points).toEqual(33)

  })

  test('call with spare score in the first tries, follow by one strike', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('5/ X 1- -- -- -- -- -- -- --')

    // Assert
    expect(points).toEqual(32)

  })

  test('call with spare score at the end', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('-- -- -- -- -- -- -- -- -- X X X')

    // Assert
    expect(points).toEqual(30)

  })

  test('all strikes', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('X X X X X X X X X X X X')

    // Assert
    expect(points).toEqual(300)

  })

  test('all spare', () => {
    // Arrage
    const bowling = new Bowling()

    // Act
    const points = bowling.run('0/ 0/ 0/ 0/ 0/ 0/ 0/ 0/ 0/ 0/ x')

    // Assert
    expect(points).toEqual(110)

  })
})
