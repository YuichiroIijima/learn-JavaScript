/**
 * ランダムな配列を作成する
 * @param {number} randomRange 配列に入れることのできる最大数を指定する
 * @oaram {number} arrayLength 配列の長さを指定する
 */
function randomArray(randomRange, arrayLength) {
  const array = [];

  for (let i = 0; i < arrayLength; i++) {
    const random = Math.ceil(Math.random() * randomRange);
    array.push(random);
  }
  console.log(array);
}
