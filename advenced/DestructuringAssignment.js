  let a, b, rest;
  [a, b, ...rest] = [10, 20, 30, 40, 50];
  console.log(a);
  console.log(b);
  console.log(rest);

  let d, e, f;
  [d, e, f=1] = [10, 20];
  console.log(d, e, f)

  const { t, h, ...arr } = { t: 30, h: 400, ga: 10, fa:20 };
  console.log({t, h, arr});