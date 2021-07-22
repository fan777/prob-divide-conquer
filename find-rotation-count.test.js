const findRotationCount = require("./find-rotation-count")

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    expect(findRotationCount([4, 98, 100, 1, 2])).toBe(3)
    expect(findRotationCount([1, 2, 4, 8, 100])).toBe(0)
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
  })
})