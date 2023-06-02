// let time = 10;

// setInterval(function () {
//   if (time >= 0) {
//     console.log(time);
//     time = time - 1;
//   }
// }, 1000);

let time = 180;

setInterval(function () {
  let hour = parseInt(time / 60);
  let min = String(time % 60).padStart(2, "0");
  time -= 1;
  console.log(`${hour}:${min}`);
}, 1000);
