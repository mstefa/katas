import { ChristmasLights } from "../src/ChristmasLights";


describe('ChristmasLights', () => {

  test('create a grid with all light turned off', () => {
    const christmasLights = new ChristmasLights(1000, 1000);
    const lightOff = christmasLights.getNumberOfLightOff()
    expect(lightOff).toEqual(1000000)

  })

  test('turn on all lights', () => {
    const christmasLights = new ChristmasLights(1000, 1000);
    christmasLights.turnOn(0, 0, 999, 999)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(1000000)
  })

  test('turn the first light', () => {
    const christmasLights = new ChristmasLights(1000, 1000);
    christmasLights.turnOn(0, 0, 0, 0)
    const lightOn = christmasLights.getNumberOfLightOn()
    expect(lightOn).toEqual(1)
    expect(christmasLights.lightsGrid()[0][0]).toEqual(1)
  })
})
