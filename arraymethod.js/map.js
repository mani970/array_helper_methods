
let num = [1, 40, 20, 88, 888, 99999];

//map method with chaining
let totalnum = num
.map((a) => a * a)
.reduce((total , value) => total + value);
console.log(totalnum);

//using call back function muntate work  with foreach
num.forEach(function (a , b) {
    console.log(a * b);
});
