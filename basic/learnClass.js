/**
 * 基本的なクラス
 */
class MyClass {
  constructor() {
    // コンストラクタ関数の処理
    // インスタンス化されると自動で呼び出される
    // コンストラクタの処理が不要の場合は省略することもできる
  }
}

// 上記以外の呼び方もある
const SeccondClass = class SeccondClass {
  constructor() {}
};

const AnonymousClass = class {
  constructor() {}
};

// `MyClass`をインスタンス化する
const myClass = new MyClass();

// 毎回新しいインスタンスを作成する
const myClassAnother = new MyClass();

// それぞれのインスタンスは異なるオブジェクト
console.log(myClass === myClassAnother);

// クラスのインスタンスかどうかは`instanceof`で判定できる
console.log(myClass instanceof MyClass);
console.log(myClassAnother instanceof MyClass);

/**
 * 実際にクラスを使う
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // コンストラクタにはreturn文は書かない
  }
}

const point = new Point(3, 4);

console.log(point.x);
console.log(point.y);

/**
 * コンストラクタの理解を理解する為のクラス
 */
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();

console.log(counterA);
console.log(counterB);
