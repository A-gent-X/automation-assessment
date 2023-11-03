const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('shuffle return array', () => {
    let result = shuffle();

    expect(result).toStrictEqual([]);
})

test('argument setn matches return', () => {
  let result = shuffle([
    "one","two", "three"
  ]);

  expect(result.length).toBe(3);
})

});
