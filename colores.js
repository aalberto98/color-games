var numCuadrados = 6;
var colores = [];
var colorGanador;
var printRGB = document.getElementById("rgb");
var mensaje = document.querySelector("#correcto");
var h1 = document.querySelector("h1");
var resetButt = document.querySelector("#reset");
var niveles = document.querySelectorAll(".nivel");
var cuadrados = document.querySelectorAll(".cuadrados");

iniciar();

function iniciar(){
	ponerNiveles();
	ponerCuadros();
	reset();
}

function ponerNiveles(){
	for (var i = 0; i < niveles.length; i++){
		niveles[i].addEventListener("click",function(){
			niveles[0].classList.remove("seleccionado");
			niveles[1].classList.remove("seleccionado");
			this.classList.add("seleccionado");
			this.textContent === "Easy" ? numCuadrados = 3 : numCuadrados = 6;
			reset();
		});
	}
}

function ponerCuadros(){
	for(var i = 0; i < cuadrados.length; i++){
		cuadrados[i].style.background = colores[i];
		cuadrados[i].addEventListener("click", function(){
			var colorSeleccionado = this.style.background;
			if (colorGanador === colorSeleccionado){
				mensaje.textContent = "Correct";
				cambiarColores(colorGanador);
				h1.style.background = colorGanador;
				resetButt.textContent = "Play again?"
			} else {
				this.style.background = "#232323";
				mensaje.textContent = "Incorrect";
			}
		});
	}
}

function reset(){
	colores = generarColores(numCuadrados);
	colorGanador = escogerColor();
	printRGB.textContent = colorGanador;
	mensaje.textContent = "";
	for(var i = 0; i < cuadrados.length; i++){
		if (colores[i]){
			cuadrados[i].style.display = "block";
			cuadrados[i].style.background = colores[i];
		} else {
			cuadrados[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	resetButt.textContent = "New colors";
}

resetButt.addEventListener("click",function(){
	reset();
})

function cambiarColores (color){
	for(var i = 0; i < cuadrados.length; i++){
		cuadrados[i].style.background = colorGanador;
	}
}

function escogerColor(){
	var regresar = Math.floor(Math.random() * colores.length);
	return colores[regresar];
}

function generarColores(numero){
	var arr = [];
	for(var i = 0; i < numero; i++){
		var num1 = Math.floor(Math.random() * 256);
		var num2 = Math.floor(Math.random() * 256);
		var num3 = Math.floor(Math.random() * 256);
		arr[i] = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")"
	}
	return arr;
}