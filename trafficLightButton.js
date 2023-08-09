function loadTrafficLight () {
	var trafficLight = document.getElementById("semafor");
	var timer = setInterval(changeColor, 10000);
	trafficLight.onclick = changeColor;
}

function changeColor () {
	var semafor1 = document.getElementById("semafor")
	var color = semafor1.getAttribute("class");
	if(color == "red") {
		semafor1.setAttribute("class", "yellow");
	} else if(color == "yellow") {
		semafor1.setAttribute("class", "green");	
	} else {
		semafor1.setAttribute("class", "red");		
	}
}

window.onload = loadTrafficLight;
