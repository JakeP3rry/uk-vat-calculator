/*
 * uk-vat-calculator - add or remove UK VAT. Dependency-free, deterministic.
 *
 * Standard UK VAT is 20%. Pass a different rate for the reduced (5%) or
 * zero-rated bands. All amounts are rounded to 2 decimal places. Pure
 * functions, no dependencies, no network calls.
 *
 * Built by DigiSurf Agency - https://www.digisurfagency.com
 */
"use strict";

var STANDARD_RATE = 20;

function round2(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

/** Add VAT to a net (ex-VAT) amount. Returns { net, rate, vat, gross }. */
function addVat(net, rate) {
  if (typeof rate !== "number") { rate = STANDARD_RATE; }
  net = Number(net);
  var vat = round2(net * rate / 100);
  return { net: round2(net), rate: rate, vat: vat, gross: round2(net + vat) };
}

/** Remove VAT from a gross (inc-VAT) amount. Returns { gross, rate, vat, net }. */
function removeVat(gross, rate) {
  if (typeof rate !== "number") { rate = STANDARD_RATE; }
  gross = Number(gross);
  var net = round2(gross / (1 + rate / 100));
  return { gross: round2(gross), rate: rate, vat: round2(gross - net), net: net };
}

module.exports = { addVat: addVat, removeVat: removeVat, STANDARD_RATE: STANDARD_RATE };
