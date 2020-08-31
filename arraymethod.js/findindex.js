let smallnum = [20, 6, 2, 23, 58, 108, 111, 509, 110000 ];

let Issmallnum = (Element) => Element > 50;
let Islargenum = (Element) => Element < 10;
console.log(smallnum.findIndex(Issmallnum));
console.log(smallnum.findIndex(Islargenum));