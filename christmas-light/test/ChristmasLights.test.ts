import { ChristmasLights } from "../src/ChristmasLights";


describe('ChristmasLights', () => {

  test('turn on light', () => {
    // Arrage
    const christmasLights = new ChristmasLights(1000, 1000);
    // const name = "testName"
    // ohce(name)

    const lightOff = christmasLights.getNumberOfLightOff()
    expect(lightOff).toEqual(1000000)

  })
})
