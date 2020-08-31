let oddnum = [3, 5, 7, 13, 19, 99, 199];
let odd = (Element) => Element % 3 === 0;
let evennum = [3, 5, 7, 13, 19, 99, 199];
let even = (Element) => Element % 2 === 0;
console.log(oddnum.some(odd));
console.log(evennum.some(even));