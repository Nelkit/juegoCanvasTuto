var tablero, direccion;

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 300,
	y: 300,
	frenteURL: "diana-frente.png",
	frenteOK: false,

	atrasURL: "diana-atras.png",
	atrasOK: false,

	izqURL: "diana-izq.png",
	izqOK: false,

	derURL: "diana-der.png",
	derOK: false,
	velocidad: 10
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200
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

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}

function teclado(datos) 
{
	codigo = datos.keyCode

	if (codigo == teclas.UP) 
	{
		tifis.y -= tifis.velocidad;
		if (tifis.y>158 && tifis.y<202 && tifis.x<133) {
			tifis.y += tifis.velocidad;
		};

	}
	else if (codigo == teclas.DOWN)
	{
		tifis.y += tifis.velocidad;
		if (tifis.y>158 && tifis.y<202 && tifis.x<133) {
			tifis.y -= tifis.velocidad;
		};
	}
	else if (codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
		if (tifis.x>0 && tifis.x<133 && tifis.y>158 && tifis.y<202) {
			tifis.x -= tifis.velocidad;
		};

	}
	else if (codigo == teclas.LEFT)
	{
		tifis.x -= tifis.velocidad;
		if (tifis.x>0 && tifis.x<133 && tifis.y>158 && tifis.y<202) {
			tifis.x += tifis.velocidad;
		};

	}

	direccion = codigo;
	console.log("tifis esta en: x: "+tifis.x+", y: "+tifis.y);


	dibujar();

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

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarLiz() 
{
	liz.lizOK = true;
	dibujar();
}

function dibujar () 
{
	//capa 1
	if (fondo.imagenOK == true) 
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	};

	//capa 2
	if (liz.lizOK == true) 
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	};

	//capa 3
	var tifiDibujo = tifis.frente;
	if (tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK) 
	{
		if (direccion == teclas.UP) {
			tifiDibujo = tifis.atras;
		}else if (direccion == teclas.DOWN) {
			tifiDibujo = tifis.frente;
		}else if (direccion == teclas.RIGHT) {
			tifiDibujo = tifis.der;
		}else if (direccion == teclas.LEFT) {
			tifiDibujo = tifis.izq;
		};
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	};
}