function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
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


function promisified(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

// promisified(1000).then(function () {
//   console.log("Log 1");
//   return promisified(2000);
// })
//   .then(function () {
//     console.log("Log 2");
//     return promisified(3000);
//   })
//   .then(function () {
//     console.log("Log 3");
//   })

async function promiseChain() {
  await promisified(1000);
  console.log("Log 1");
  await promisified(2000);
  console.log("Log 2");
  await promisified(3000);
  console.log("Log 3");
}

//Concurrent execution: make it behave as above by tweaking the differences between lags
async function promiseAll() {
  const p1 = promisified(1000).then(function () {
    console.log("Log 1");
  });
  const p2 = promisified(3000).then(function () {
    console.log("Log 2");
  });
  const p3 = promisified(6000).then(function () {
    console.log("Log 3");
  });
  await Promise.all([p1, p2, p3]);
}

promiseAll();
