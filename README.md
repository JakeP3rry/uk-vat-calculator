# uk-vat-calculator

A tiny, dependency-free JavaScript module to **add** or **remove** UK VAT.
Deterministic - pure functions, no external data, no network calls.

## Install / use

No build step. Drop `index.js` in and require it:

```js
const { addVat, removeVat } = require("./index.js");

addVat(100);        // { net: 100, rate: 20, vat: 20, gross: 120 }
addVat(100, 5);     // { net: 100, rate: 5,  vat: 5,  gross: 105 }

removeVat(120);     // { gross: 120, rate: 20, vat: 20, net: 100 }
```

## API

- `addVat(net, rate = 20)` - adds VAT to a net amount. Returns
  `{ net, rate, vat, gross }`.
- `removeVat(gross, rate = 20)` - strips VAT out of a gross amount. Returns
  `{ gross, rate, vat, net }`.

All money values are rounded to 2 decimal places. The default rate is the UK
standard 20%; pass `5` for the reduced band or `0` for zero-rated.

## Licence

MIT.

---

Built by [DigiSurf Agency](https://www.digisurfagency.com) - websites and local
SEO for UK small businesses.
