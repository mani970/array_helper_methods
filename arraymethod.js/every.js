let checkingvalue = [40, 36, 64, 56, 98, 89];

let greaterthanhundred = (currentvalue) =>currentvalue > 100;
let lessthanhundred = (currentvalue) =>currentvalue < 100;

console.log(checkingvalue.every(greaterthanhundred));

console.log(checkingvalue.every(lessthanhundred));