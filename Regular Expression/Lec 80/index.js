//! 78 – Regular Expression – Lookahead – Lookbehind

//* Lookahead, one of the most used rule of regular expression

(function () {})();
//?==========================================================================================

//& Without Lookahead
(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+\sUSD/g; // without lookahead
  //* I want a digit or more and then space and then fixed string USD

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40 USD']
  console.log(match);
})();

//& With lookahead (?=), to remove space and USD from the match

(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+(?=\sUSD)/g; // with lookahead  (?=)
  //* look for this part of pattern \sUSD but don't return it in the match

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40']
  console.log(match);
})();

(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+(?=\sUSD|\sEU)/g; // with lookahead  (?=)
  //* look for this part of pattern \sUSD but don't return it in the match

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40']
  console.log(match);
})();

//&  ?! negated lookahead

(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+(?!\sUSD|\sEU)/g; // with lookahead  (?!)
  //* look for all digits that don't have space and USD or EU after it

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['5','4]
  console.log(match);
})();
//?=========================================================================================
//& Lookbehind (?<=)

//* ? and reversed <=

(function () {
  let str = "quantity 5, the price is 40 USD, quantity 6";

  let reg = /(?<=quantity\s)\d+/g; // with lookahead  (?!)
  //* look for the digit right after space and quantity

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['5','6']
  console.log(match);
})();

//& Negated Lookbehind (?<!)

//* ? and reversed <=

(function () {
  let str = "quantity 5, the price is 40 USD";

  let reg = /(?<!quantity\s)\d+/g; // with lookahead  (?!)
  //* look for the digit that not after it space and quantity

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40']
  console.log(match);
})();
