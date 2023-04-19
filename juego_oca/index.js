let players = [];
let position = []


// [pippo, pluto]
// [6    ,  0    ]
function gooseGame(input) {
  const myArray = input.split(" ");
  if (myArray.includes('move')) {
    const name = myArray[1];
    const number1 = parseInt(myArray[2].replace(',', ''))
    const number2 = parseInt(myArray[3])

    let playerId = players.indexOf(name)
    const previousPosition = position[playerId];
    position[playerId] = previousPosition + number1 + number2

    return `${name} rolls ${number1}, ${number2}. ${name} moves from ${previousPosition ? previousPosition : "Start"} to ${position[playerId]}`
  }
  let name = myArray[2];

  if (players.includes(name)) {
    return `${name}: already existing player`
  }
  players.push(name)
  position.push(0)

  const displayNames = players.join(', ')
  return `players: ${displayNames}`
}


function endGame() {
  players = [];
  position = [];

}


module.exports = {
  gooseGame,
  endGame
}
