// js implementation of https://gist.github.com/dg/6031c39a148478f0880c#file-verifyrc-php

const birthNumberRegex = /^(\d\d)(\d\d)(\d\d)(\d\d\d)(\d?)$/

const getCzechBirthNumberDate = birthNumber => {
  birthNumber = birthNumber
    .replace("/", "")
    .replace(" ", "")

  if (!birthNumberRegex.test(birthNumber))
    return false

  let [year, month, day, _, checkDigit] = birthNumber
    .match(birthNumberRegex)
    .slice(1, 6)
    .map(match => parseInt(match, 10))

  let isValidCheckDigit = !isNaN(checkDigit)
  let birthNumberMod = birthNumber.slice(0, -1) % 11

  if (birthNumberMod === 10)
    birthNumberMod = 0

  if (isValidCheckDigit && checkDigit !== birthNumberMod)
    return false

  if (!isValidCheckDigit)
    year += year < 54 ? 1900 : 1800
  else
    year += year < 54 ? 2000 : 1900

  if (month > 70 && year > 2003)
    month -= 70
  else if (month > 50)
    month -= 50
  else if (month > 20 && year > 2003)
    month -= 20

  if (year > 0
    && month > 0
    && month < 13
    && day > 0
    && day < new Date(year, month - 1, 0).getDate()
  )
    return new Date(year, month - 1, day)

  return false
}

const isCzechBirthNumberValid = birthNumber => !!getCzechBirthNumberDate(birthNumber)

exports.isCzechBirthNumberValid = isCzechBirthNumberValid
exports.getCzechBirthNumberDate = getCzechBirthNumberDate
