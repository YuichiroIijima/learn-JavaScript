function factoryPerson(first, last) {
  let person = { first, last };

  return person;
}

let jima = factoryPerson("ii", "jima");
console.log(jima)

function Person(first, last) {
  this.first = first;
  this.last = last;
}

let me = new Person("ii", "jima");
console.log(me)

const person = {
  first: "First",
  last: "Last"
};
