var assert = require("assert")
var bn = require("../bn2date")

describe("bn2date", function () {

  it("should validate birth number", function () {
    assert.deepEqual(bn.isValid("7801233540"), {year: 1978, month: 1, day: 23})
    assert.deepEqual(bn.isValid("0531135099"), {year: 2005, month: 11, day: 13})
    assert.deepEqual(bn.isValid("0681186066"), {year: 2006, month: 11, day: 18})
    assert.deepEqual(bn.isValid("7401040020"), {year: 1974, month: 1, day: 4})
    assert.deepEqual(bn.isValid("9406148642"), {year: 1994, month: 6, day: 14})
    assert.deepEqual(bn.isValid("040714001"), {year: 1904, month: 7, day: 14})
    assert.deepEqual(bn.isValid("950101123"), {year: 1895, month: 1, day: 1})
  })

  it("should validate birth number with slash", function () {
    assert.deepEqual(bn.isValid("780123/3540"), {year: 1978, month: 1, day: 23})
    assert.deepEqual(bn.isValid("053113/5099"), {year: 2005, month: 11, day: 13})
    assert.deepEqual(bn.isValid("068118/6066"), {year: 2006, month: 11, day: 18})
    assert.deepEqual(bn.isValid("740104/0020"), {year: 1974, month: 1, day: 4})
    assert.deepEqual(bn.isValid("940614/8642"), {year: 1994, month: 6, day: 14})
    assert.deepEqual(bn.isValid("040714/001"), {year: 1904, month: 7, day: 14})
    assert.deepEqual(bn.isValid("950101/123"), {year: 1895, month: 1, day: 1})
  })

  it("should validate birth number with space", function () {
    assert.deepEqual(bn.isValid("780123 3540"), {year: 1978, month: 1, day: 23})
    assert.deepEqual(bn.isValid("053113 5099"), {year: 2005, month: 11, day: 13})
    assert.deepEqual(bn.isValid("068118 6066"), {year: 2006, month: 11, day: 18})
    assert.deepEqual(bn.isValid("740104 0020"), {year: 1974, month: 1, day: 4})
    assert.deepEqual(bn.isValid("940614 8642"), {year: 1994, month: 6, day: 14})
    assert.deepEqual(bn.isValid("040714 001"), {year: 1904, month: 7, day: 14})
    assert.deepEqual(bn.isValid("950101 123"), {year: 1895, month: 1, day: 1})
  })

  it("should return false for invalid birth numbers", function () {
    assert.equal(bn.isValid(""), false)
    assert.equal(bn.isValid("0123456789"), false)
  })

})
