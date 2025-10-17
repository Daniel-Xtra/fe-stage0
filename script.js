function updateTime() {
  document.getElementById("currentTime").textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
