import { GildedRose, Item } from "./GildenRose";

const items = [
  new Item("Elixir of the Mongoose", 5, 7)
];
const expected = structuredClone(items)
const gildedRose = new GildedRose(items);
const result = gildedRose.updateQuality()

console.log(expected)
console.log(result)
