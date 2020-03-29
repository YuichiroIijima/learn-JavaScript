function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.introduce = function () {
  console.log(`My name is ${this.first} ${this.last}`)
}

let me0 = new Person("ii", "jima");
let me1 = new Person("me1", "dayo");
me0.introduce = function () {
  console.log("I don't want to introduce myself");
}
me0.introduce();
me1.introduce();