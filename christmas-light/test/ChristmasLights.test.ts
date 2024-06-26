import { ChristmasLights } from "../src/ChristmasLights";


describe('ChristmasLights', () => {

  test('create a grid with all light turned off', () => {
    const christmasLights = new ChristmasLights(10, 10);
    const lightOff = christmasLights.getNumberOfLightOn()
    expect(lightOff).toEqual(0)
  })

  test('turn the first light', () => {
    const christmasLights = new ChristmasLights(10, 10);
    christmasLights.turnOn(0, 0, 0, 0)
    expect(christmasLights.lightsGrid()[0][0]).toEqual(1)
  })

  test('turn on all lights', () => {
    const christmasLights = new ChristmasLights(10, 10);
    christmasLights.turnOn(0, 0, 9, 9)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(100)
  })

  test('turn off the first light', () => {
    const christmasLights = new ChristmasLights(10, 10);
    christmasLights.turnOn(0, 0, 9, 9)
    christmasLights.turnOff(0, 0, 0, 0)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(99)
    expect(christmasLights.lightsGrid()[0][0]).toEqual(0)
  })

  test('from an off grid, toggle all lights', () => {
    const christmasLights = new ChristmasLights(10, 10);
    christmasLights.toggle(0, 0, 9, 9)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(100)
  })

  test('from an off grid, toggle all lights', () => {
    const christmasLights = new ChristmasLights(10, 10);
    christmasLights.toggle(0, 0, 9, 9)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(100)
  })

  test('from an on grid, toggle all lights', () => {
    const christmasLights = new ChristmasLights(10, 10);
    christmasLights.turnOn(0, 0, 9, 9)
    christmasLights.toggle(0, 0, 9, 9)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(0)
  })

})
