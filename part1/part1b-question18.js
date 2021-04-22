setInterval(currTime, 1000);
function currTime() {
  let d = new Date();
  let time = d.toTimeString();
  console.log(time);
}
