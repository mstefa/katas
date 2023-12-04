import { ChristmasLights } from "./ChristmasLights"

const christmasLights = new ChristmasLights(1000, 1000)

console.time("ExampleTime");
christmasLights.turnOn(887, 9, 959, 629)
christmasLights.turnOn(454, 398, 844, 448)
christmasLights.turnOff(539, 398, 559, 965)
christmasLights.turnOff(370, 819, 676, 868)
christmasLights.turnOff(145, 42, 370, 997)
christmasLights.turnOff(301, 3, 808, 453)
christmasLights.turnOn(351, 678, 951, 908)
christmasLights.toggle(720, 196, 897, 994)
christmasLights.toggle(831, 394, 904, 860)


const numberOfLightOn = christmasLights.getNumberOfLightOn()

console.log(`We have ${numberOfLightOn} 💡 lit`)

console.timeEnd("ExampleTime");
// Small case

// const christmasLights = new ChristmasLights(10, 10)
// christmasLights.turnOn(0, 0, 3, 3)
// christmasLights.printLightBulbs()

// const numberOfLightOn = christmasLights.getNumberOfLightOn()

// console.log(`We have ${numberOfLightOn} 💡 lit`)



// const christmasLights = new ChristmasLights(10, 10)
// christmasLights.turnOn(1, 1, 3, 3)
// christmasLights.printLightBulbs()
// let numberOfLightOn = christmasLights.getNumberOfLightOn()

// console.log(`We have ${numberOfLightOn} 💡 lit`)

// christmasLights.turnOff(1, 1, 1, 1)
// christmasLights.printLightBulbs()
// numberOfLightOn = christmasLights.getNumberOfLightOn()

// console.log(`We have ${numberOfLightOn} 💡 lit`)

// christmasLights.toggle(1, 1, 3, 3)
// christmasLights.printLightBulbs()

// numberOfLightOn = christmasLights.getNumberOfLightOn()

// console.log(`We have ${numberOfLightOn} 💡 lit`)
