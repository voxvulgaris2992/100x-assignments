//Easy-1
function initiateCounter1() {
  let counter = 0;
  function incrementCounter() {
    counter += 1;
    console.log(counter);
  }
  const counter1 = setInterval(incrementCounter, 1000);
}

//Easy-2
function initiateCounter2() {
  let counter = 0;
  function incrementCounter() {
    counter += 1;
    console.log(counter);
    setTimeout(incrementCounter, 1000);
  }
  incrementCounter();
}

//Easy-3
// const fs = require('fs')

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log("Inside fs.readFile");
//   if (err) {
//     console.error(err);
//   }
//   else {
//     console.log("Callback: " + data);
//   }
// });

// console.log("After fs.readFile");

//Easy-4
// fs.writeFile("a.txt", "Hello again!", "utf-8", function (err) {
//   console.log("Inside fs.writeFile");
//   if (err) {
//     console.error(err);
//   }
//   else {
//     console.log("Callback: file overwritten");
//   }
// });

// console.log("After fs.writeFile");

//Medium-1
// const fs = require('fs');

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.error(err);
//   }
//   if (data) {
//     console.log(data);
//     fs.writeFile("a.txt", data.replace(/\s+/g, ' '), "utf-8", function (err) {
//       if (err) {
//         console.error(err);
//       }
//       else {
//         fs.readFile("a.txt", "utf-8", function (err, data) {
//           if (err) {
//             console.error(err);
//           }
//           if (data) {
//             console.log(data);
//           }
//         })
//       }
//     })
//   }
// })

//Medium-2
function convertTime(milliseconds) {
  function padZero(number) {
    if (number < 10) {
      return '0' + number.toString();
    }
    else {
      return number.toString();
    }
  }
  let date = new Date(milliseconds);
  var amPm;
  var hours;
  if (date.getHours() > 12) {
    hours = date.getHours() % 12;
    amPm = "PM"
  }
  else {
    hours = date.getHours();
    amPm = "AM"
  }
  console.log(padZero(hours) + ":" + padZero(date.getMinutes()) + ":" + padZero(date.getSeconds()) + " " + amPm);
}

function initiateCounter3(fn) {
  let newDate = new Date().getTime();
  function incrementCounter() {
    newDate += 1000;
    convertTime(newDate);
    setTimeout(incrementCounter, 1000);
  }
  incrementCounter(newDate);
}

initiateCounter3(convertTime);





// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)
