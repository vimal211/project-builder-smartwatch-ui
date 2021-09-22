function showTime() {
  let curDate = new Date();
  let curDay = curDate.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").innerText = week[curDay];

  let hours = curDate.getHours();
  let minutes = curDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let myTime = `${hours}:${minutes}`;
  console.log(myTime);
  document.getElementById("top").innerText = myTime;
  document.getElementById(
    "time"
  ).innerHTML = `${hours}<span>:</span>${minutes}`;
}

setInterval(showTime, 1000);
