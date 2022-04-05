alert("This is a warning");
alert("Please don't share this website with others");
var A1 = "YouTing Liao";
//cridt to me = YOUTING LIAO
console.log(A1);

var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
