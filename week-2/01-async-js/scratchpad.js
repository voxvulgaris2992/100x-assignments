// Returning undefined, caller sends callback
function myOwnSetTimeout(callback, duration) {
  setTimeout(callback, duration);
}

// Returning promise, caller receives promise
function promisifiedSetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  })
  return p;
}

// myOwnSetTimeout(function () {
//   console.log("Log 1");
//   myOwnSetTimeout(function () {
//     console.log("Log 2");
//     myOwnSetTimeout(function () {
//       console.log("Log 3");
//     }, 3000);
//   }, 2000);
// }, 1000);

promisifiedSetTimeout(1000).then(function () {
  console.log("Log 1");
  return promisifiedSetTimeout(2000);
})
  .then(function () {
    console.log("Log 2");
    return promisifiedSetTimeout(3000);
  })
  .then(function () {
    console.log("Log 3");
  })
