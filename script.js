function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#top-bar-date");
  timeText.innerHTML = currentTime;

}

setInterval(updateTime, 1000);