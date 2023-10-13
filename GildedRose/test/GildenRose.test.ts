import { GildedRose, Item } from "../src/GildenRose";

describe('Gilded Rose', () => {

  it('should be in update quality of a normal product', () => {
    const items = [
      new Item("Elixir of the Mongoose", 5, 7)
    ];
    // const expected = structuredClone(items)
    const expected = [
      new Item("Elixir of the Mongoose", 4, 6)
    ];
    const gildedRose = new GildedRose(items);
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected);
  });
});
