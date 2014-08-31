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


var obs1 = {
	disTop: 158,
	disBottom: 248,
	disLeft: -40,
	disRight: 133
};

var obs2 = {
	disTop: -50,
	disBottom: 250,
	disLeft: 160,
	disRight: 235
};

var obs3 = {
	disTop: 300,
	disBottom: 395,
	disLeft: 110,
	disRight: 500
};

var tifis = {
	x: 0,
	y: 0,
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
		//evitando obstaculo numero 1		
		if (tifis.y>obs1.disTop && tifis.y<obs1.disBottom  && tifis.x<obs1.disRight && tifis.x>obs1.disLeft) {
			tifis.y += tifis.velocidad;
		};
		//evitando obstaculo numero 2
		if (tifis.y>obs2.disTop && tifis.y<obs2.disBottom  && tifis.x<obs2.disRight && tifis.x>obs2.disLeft) {
			tifis.y += tifis.velocidad;
		};
		//evitando obstaculo numero 3
		if (tifis.y>obs3.disTop && tifis.y<obs3.disBottom  && tifis.x<obs3.disRight && tifis.x>obs3.disLeft) {
			tifis.y += tifis.velocidad;
		};	

	}

	else if (codigo == teclas.DOWN)
	{
		tifis.y += tifis.velocidad;
		//evitando obstaculo numero 1
		if (tifis.y>obs1.disTop && tifis.y<obs1.disBottom &&  tifis.x<obs1.disRight && tifis.x>obs1.disLeft) {
			tifis.y -= tifis.velocidad;
		};
		//evitando obstaculo numero 2
		if (tifis.y>obs2.disTop && tifis.y<obs2.disBottom &&  tifis.x<obs2.disRight && tifis.x>obs2.disLeft) {
			tifis.y -= tifis.velocidad;
		};
		//evitando obstaculo numero 3
		if (tifis.y>obs3.disTop && tifis.y<obs3.disBottom &&  tifis.x<obs3.disRight && tifis.x>obs3.disLeft) {
			tifis.y -= tifis.velocidad;
		};
	}

	else if (codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
		//evitando obstaculo numero 1
		if (tifis.x>obs1.disLeft && tifis.x<obs1.disRight && tifis.y>obs1.disTop && tifis.y<obs1.disBottom) {
			tifis.x -= tifis.velocidad;
		};
		//evitando obstaculo numero 2
		if (tifis.x>obs2.disLeft && tifis.x<obs2.disRight && tifis.y>obs2.disTop && tifis.y<obs2.disBottom) {
			tifis.x -= tifis.velocidad;
		};
		//evitando obstaculo numero 3
		if (tifis.x>obs3.disLeft && tifis.x<obs3.disRight && tifis.y>obs3.disTop && tifis.y<obs3.disBottom) {
			tifis.x -= tifis.velocidad;
		};
	}

	else if (codigo == teclas.LEFT)
	{
		tifis.x -= tifis.velocidad;
		//evitando obstaculo numero 1		
		if (tifis.x>obs1.disLeft && tifis.x<obs1.disRight && tifis.y>obs1.disTop && tifis.y<obs1.disBottom) {
			tifis.x += tifis.velocidad;
		};
		//evitando obstaculo numero 2
		if (tifis.x>obs2.disLeft && tifis.x<obs2.disRight && tifis.y>obs2.disTop && tifis.y<obs2.disBottom) {
			tifis.x += tifis.velocidad;
		};
		//evitando obstaculo numero 3
		if (tifis.x>obs3.disLeft && tifis.x<obs3.disRight && tifis.y>obs3.disTop && tifis.y<obs3.disBottom) {
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