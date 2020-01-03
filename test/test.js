const assert = require("assert")
const {
  isCzechBirthNumberValid,
  getCzechBirthNumberDate
} = require("../validate-czech-birth-number")

describe("validate-czech-birth-number", () => {
  it("should validate birth number", function () {
    assert.equal(isCzechBirthNumberValid("7801233540"), true)
    assert.equal(isCzechBirthNumberValid("780123/3540"), true)
    assert.equal(isCzechBirthNumberValid("780123 3540"), true)

    assert.equal(isCzechBirthNumberValid("0531135099"), true)
    assert.equal(isCzechBirthNumberValid("053113/5099"), true)
    assert.equal(isCzechBirthNumberValid("053113 5099"), true)

    assert.equal(isCzechBirthNumberValid("0681186066"), true)
    assert.equal(isCzechBirthNumberValid("068118/6066"), true)
    assert.equal(isCzechBirthNumberValid("068118 6066"), true)

    assert.equal(isCzechBirthNumberValid("7401040020"), true)
    assert.equal(isCzechBirthNumberValid("740104/0020"), true)
    assert.equal(isCzechBirthNumberValid("740104 0020"), true)

    assert.equal(isCzechBirthNumberValid("9406148642"), true)
    assert.equal(isCzechBirthNumberValid("940614/8642"), true)
    assert.equal(isCzechBirthNumberValid("940614 8642"), true)

    assert.equal(isCzechBirthNumberValid("040714001"), true)
    assert.equal(isCzechBirthNumberValid("040714/001"), true)
    assert.equal(isCzechBirthNumberValid("040714 001"), true)

    assert.equal(isCzechBirthNumberValid("950101123"), true)
    assert.equal(isCzechBirthNumberValid("950101/123"), true)
    assert.equal(isCzechBirthNumberValid("950101 123"), true)

    assert.equal(isCzechBirthNumberValid(""), false)
    assert.equal(isCzechBirthNumberValid("0123456789"), false)
    assert.equal(isCzechBirthNumberValid("7801233541"), false)
    assert.equal(isCzechBirthNumberValid("780123/3541"), false)
    assert.equal(isCzechBirthNumberValid("780123 3541"), false)
  })

  it("should return birth date", () => {
    assert.equal(getCzechBirthNumberDate("7801233540").getTime(), (new Date(1978, 0, 23)).getTime())
    assert.equal(getCzechBirthNumberDate("0531135099").getTime(), (new Date(2005, 10, 13)).getTime())
    assert.equal(getCzechBirthNumberDate("0681186066").getTime(), (new Date(2006, 10, 18)).getTime())
    assert.equal(getCzechBirthNumberDate("7401040020").getTime(), (new Date(1974, 0, 4)).getTime())
    assert.equal(getCzechBirthNumberDate("9406148642").getTime(), (new Date(1994, 5, 14)).getTime())
    assert.equal(getCzechBirthNumberDate("040714001").getTime(), (new Date(1904, 6, 14)).getTime())
    assert.equal(getCzechBirthNumberDate("950101123").getTime(), (new Date(1895, 0, 1)).getTime())
  })
})
