const Rover = require("./Rover")

describe('Rover', () => {

  test('move', () => {

    rover = new Rover(5);

    console.log(rover.receive("l"))
  })
})

