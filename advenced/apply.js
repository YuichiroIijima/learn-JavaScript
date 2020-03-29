  function greet() {
    // console.log(arguments);
    let silicedArray = [].slice.call(arguments)
    let hi = `HI, ${this.name}`;
    console.log(hi);
    console.log(silicedArray)
  }

  let obj = {name: "Tom"}

  greet.call(obj, 1, 2, 3);

  const arry = [1, 2, 3, 4];
  console.log(Math.min.apply(null, arry));