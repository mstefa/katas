const { gooseGame, endGame } = require("./index")


describe('test ohceThe Goose Game Kata', () => {

  beforeEach(() =>
    endGame()
  )

  test('add one player', () => {

    const response = gooseGame('add player Pippo')
    expect(response).toEqual('players: Pippo')

  })

  test('test second player', () => {
    gooseGame('add player Pippo')
    const response = gooseGame('add player Pluto')
    expect(response).toEqual('players: Pippo, Pluto')
  })

  test('should do not add a duplicated player', () => {
    gooseGame('add player Pippo')
    const response = gooseGame('add player Pippo')
    expect(response).toEqual("Pippo: already existing player")
  })

  test('should move a player', () => {
    gooseGame('add player Pippo')
    const response = gooseGame('move Pippo 4, 2')
    expect(response).toEqual('Pippo rolls 4, 2. Pippo moves from Start to 6')
  })

  test('should move a player', () => {
    gooseGame('add player Pluto')
    const response = gooseGame('move Pluto 2, 2')
    expect(response).toEqual('Pluto rolls 2, 2. Pluto moves from Start to 4')
  })
})

