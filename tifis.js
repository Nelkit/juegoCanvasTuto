var tablero, tifiDibujo ;
var direccion = 0;

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	KEY_X: 88 
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

var bala = {
	x: tifis.x,
	y: tifis.y,
	balaURL: "bala-der.png",
	balaOK: false,
	velocidad: 1
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200,
	disTop: 150,
	disBottom: 250,
	disLeft: 370,
	disRight: 430
};

function inicio () 
{
	console.log(direccion);

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
	console.log(datos.keyCode);
	codigo = datos.keyCode;

	if (codigo == teclas.KEY_X && direccion == teclas.RIGHT) {
		direccion = teclas.RIGHT;
		bala.x = tifis.x;
		bala.y = tifis.y;
		bala.balaURL = "bala-der.png";
		bala.imagen = new Image();
		bala.imagen.src = bala.balaURL;
		bala.imagen.onload = confirmarBala;
		for(var i = 1; i <= 500; i++){
		    (function(i){
		        setTimeout(function(){
		            bala.x += bala.velocidad;
					if (liz.disLeft<bala.x && liz.disRight>bala.x && liz.disTop<bala.y && liz.disBottom>bala.y ) {
						liz.lizURL = 'explosion.png';
					};
					inicio();	
		        }, 5 * i);
		    }(i));
		} 
	};

	if (codigo == teclas.KEY_X && direccion == teclas.LEFT) {
		direccion = teclas.LEFT;
		bala.x = tifis.x;
		bala.y = tifis.y;
		bala.balaURL = "bala-izq.png";
		bala.imagen = new Image();
		bala.imagen.src = bala.balaURL;
		bala.imagen.onload = confirmarBala;
		for(var i = 1; i <= 500; i++){
		    (function(i){
		        setTimeout(function(){
		            bala.x -= bala.velocidad;
					if (liz.disLeft<bala.x && liz.disRight>bala.x && liz.disTop<bala.y && liz.disBottom>bala.y ) {
						liz.lizURL = 'explosion.png';
					};
					inicio();	
		        }, 5 * i);
		    }(i));
		} 
	};

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

		//si diana entra en el espacio personal liz hace que diana explote
		if (tifis.y>liz.disTop && tifis.y<liz.disBottom  && tifis.x<liz.disRight && tifis.x>liz.disLeft) {
			tifis.frenteURL = 'explosion.png';
			tifis.atrasURL = 'explosion.png';
			tifis.derURL = 'explosion.png';
			tifis.izqURL = 'explosion.png';
			inicio ();
		};

		direccion = codigo;	
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

		//si diana entra en el espacio personal liz hace que diana explote
		if (tifis.y>liz.disTop && tifis.y<liz.disBottom &&  tifis.x<liz.disRight && tifis.x>liz.disLeft) {
			tifis.frenteURL = 'explosion.png';
			tifis.atrasURL = 'explosion.png';
			tifis.derURL = 'explosion.png';
			tifis.izqURL = 'explosion.png';
			inicio ();
		};

		direccion = codigo;
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
		//si diana entra en el espacio personal liz hace que diana explote
		if (tifis.x>liz.disLeft && tifis.x<liz.disRight && tifis.y>liz.disTop && tifis.y<liz.disBottom) {
			tifis.frenteURL = 'explosion.png';
			tifis.atrasURL = 'explosion.png';
			tifis.derURL = 'explosion.png';
			tifis.izqURL = 'explosion.png';
			inicio ();
		};

		direccion = codigo;
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
		//si diana entra en el espacio personal liz hace que diana explote
		if (tifis.x>liz.disLeft && tifis.x<liz.disRight && tifis.y>liz.disTop && tifis.y<liz.disBottom) {
			tifis.frenteURL = 'explosion.png';
			tifis.atrasURL = 'explosion.png';
			tifis.derURL = 'explosion.png';
			tifis.izqURL = 'explosion.png';
			inicio ();
		};

		direccion = codigo;
	}
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

function confirmarBala()
{
	bala.balaOK = true;
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
	if (bala.balaOK == true) 
	{
		tablero.drawImage(bala.imagen, bala.x, bala.y);
	};

	//capa 4
	tifiDibujo = tifis.frente;
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