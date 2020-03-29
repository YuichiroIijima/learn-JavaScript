function Person(first, last, age) {
  this.first = first;
  this.last = last;
}

function Japanese(first, last) {
  Person.call(this, first, last);
  this.lang = "ja";
}

Object.setPrototypeOf(Japanese.prototype, Person.prototype)

let me = new Person("ii", "jima");
Person.prototype.introduce = function () {
  console.log(`My name is ${this.first} ${this.last}`);
}

// me.introduce();

Japanese.prototype.sayJapanese = function () {
  console.log("こんにちは");
}

let samurai = new Japanese("ii", "jima");
samurai.introduce();
samurai.sayJapanese();