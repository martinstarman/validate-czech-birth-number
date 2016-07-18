var isValid = function (birthNumber) {
  var regex = /^\s*(\d\d)(\d\d)(\d\d)[ \/]?(\d\d\d)(\d?)\s*$/

  if (!regex.test(birthNumber))
    return false

  birthNumber = birthNumber.replace("/", "").replace(" ", "")

  var match = birthNumber.match(regex)

  var year = parseInt(match[1])
  var month = parseInt(match[2])
  var day = parseInt(match[3])
  var check = parseInt(match[5])

  if (isNaN(check))
    year += year < 54 ? 1900 : 1800
  else {
    var mod = birthNumber.slice(0, -1) % 11
    if (mod === 10)
      mod = 0
    if (mod !== check)
      return false
    year += year < 54 ? 2000 : 1900
  }

  if (month > 70 && year > 2003)
    month -= 70
  else if (month > 50)
    month -= 50
  else if (month > 20 && year > 2003)
    month -= 20

  var maxDay = new Date(year, month, 0).getDate()

  if (year < 0 || month < 0 || month > 13 || day < 0 || day > maxDay)
    return false

  return {year: year, month: month, day: day}
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined")
  module.exports.isValid = isValid
