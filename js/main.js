var toggle = document.getElementById("toggle")
var drawer = document.getElementById("drawer")
var logo = document.getElementById("logo")

toggle.onclick = function() {
  toggle.classList.toggle("toggle")
  drawer.classList.toggle("toggle")
  logo.classList.toggle("toggle")
}