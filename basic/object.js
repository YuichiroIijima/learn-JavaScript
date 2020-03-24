// constは代入はできないけどど、プロパティ内はいじれる
const obj = new Object();
obj.aaa = "test";
obj.bbb = "hogei";

console.log(obj, obj.aaa, obj.bbb);

const huihui = {
  "name": "jima",
  "age": 23
};
console.log(huihui);
console.log(huihui.age);

const array = [...huihui];
console.log(array);


/**
 * 中に関数を入れることもできるよ
 */
const a = {};
a.abc = test;
a.abc();

function test() {
  console.log("test");
}

const bbb = function () {
  console.log("back");
}
bbb();

const c = {
  plus(first, second) {
    return first + second;
  },
  minus(first, second) {
    return first - second;
  }
};

console.log(c.plus(1, 2));
console.log(c.minus(5, 3));