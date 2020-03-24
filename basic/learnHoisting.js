/**
 * 変数の巻き上げ
 */

var global = "global";

function func() {
  // var global; が暗黙的に宣言されている。　これが変数巻き上げの正体
  console.log(global);
  var global = "local";
  console.log(global);
}

func();

/**
 * 関数の巻き上げ
 */
// 関数の巻き上げによって、usmが呼び出される
var foo = sum(1, 2);

function sum(val1, val2) {
  return val1 + val2;
}

console.log(foo);
