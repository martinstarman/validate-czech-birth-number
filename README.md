# bn2date

Validate and return date from czech birth number.

## Examples

```
var bn = require("../bn2date")
bn.isValid("7801233540") // -> {year: 1978, month: 1, day: 23}
bn.isValid("0123456789") // -> false
```

## Test

```
npm install
npm run test
```
