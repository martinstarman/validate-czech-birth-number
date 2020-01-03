# validate-czech-birth-number

Validate and return date from czech birth number.

## Examples

```
const {
  isCzechBirthNumberValid,
  getCzechBirthNumberDate
} = require("../validate-czech-birth-number")

isCzechBirthNumberValid("7801233540") // true 
getCzechBirthNumberDate("7801233540") // Mon Jan 23 1978 00:00:00 GMT+0100 (Středoevropský standardní čas)
```

## Test

```
npm install
npm test
```
