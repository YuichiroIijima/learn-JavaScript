class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  introduce() {
    console.log(`My name is ${this.first} ${this.last}`);
  }
}

class Japanese extends Person {
  constructor(first, last) {
    super(first, last);
    this.lang = "ja";
  }

  introduce() {
    console.log(`My name is ${this.first} ${this.last}`);
  }

  sayJapanese() {
    console.log("こんにちは");
  }

  static saySorry() {
    console.log("ごめんよ");
  }
}

let me = new Person("first", "Last");
me.introduce();

let samurai = new Japanese("samu", "rai");
samurai.introduce();
samurai.sayJapanese();

Japanese.saySorry();