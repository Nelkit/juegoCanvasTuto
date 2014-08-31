var tablero;
var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false
};

function inicio () 
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	var d,i,ar,ab;
	d = document.getElementById("moverDer");
	d.addEventListener('click', moverTifisDer);

	i = document.getElementById("moverIzq");
	i.addEventListener('click', moverTifisIzq);

	ar = document.getElementById("moverArr");
	ar.addEventListener('click', moverTifisArr);

	ab = document.getElementById("moverAba");
	ab.addEventListener('click', moverTifisAba);
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function dibujar () 
{
	if (fondo.imagenOK == true) 
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	};

	if (tifis.frenteOK == true) 
	{
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	};
}

function moverTifisDer()
{
	tifis.x += 10;
	dibujar(); 
}

function moverTifisIzq()
{
	tifis.x -= 10;
	dibujar(); 
}

function moverTifisArr()
{
	tifis.y += 10;
	dibujar(); 
}

function moverTifisAba()
{
	tifis.y -= 10;
	dibujar(); 
}