let increment = (function() {
  let counter = 0; // Lexical Scope

  return function() {
    counter += 1;
    return counter;
  };
})();

console.log(increment());
console.log(increment());
console.log(increment());

function addStringFactory(tail) {
  return function() {
    return str + tail;
  };
}

let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');

let str = 'Tom';
str = addAs(str);
console.log(str);

function kakeruNum(num) {
  return function() {
    return num * kake;
  };
}

let num = kakeruNum(23);
let kake = 10;
kake = num(kake);
console.log(kake);
