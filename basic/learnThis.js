/**
 * 関数として利用する
 */
var testFunc = function() {
  this.foo = "fooo";
  global.bar = "barrrr";
  console.log(this === global);
};

testFunc();
// 中身は global.foo (window.foo) として呼び出されている
console.log(foo);
console.log(bar);

/**
 * メソッドとして利用する
 */

var obj = {
  prop: "foo",
  testMethod: function() {
    // 上の階層から見ると、 prop: "foo"と testMethod:function() が見えることを意味している
    console.log(this);
    this.prop = "bar";
  }
};

obj.testMethod();
console.log(obj.prop);

/**
 * コンストラクタとして利用する
 */
var TestFunc = function(foo) {
  this.prop = foo;
};

var instance1 = new TestFunc("bar1");
var instance2 = new TestFunc("bar2");

console.log(instance1.prop);
console.log(instance2.prop);
