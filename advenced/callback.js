function wait(callback, num) {
  setTimeout(() => {
    console.log(num);
    callback(num);
  }, 100);
}

wait(() => {
  console.log("callback function is called");
}, 0);