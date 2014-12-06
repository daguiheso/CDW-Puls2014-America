var geo = navigator.geolocation; 
var opciones = {};


function geo_error(){
	console.log("Hmmmm... this is akward... no puedo saber donde estas");
}

function geo_exito(posicion){
	console.log(posicion);
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var mapa = new Image();  // Creando un objeto del tipo Image
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
	// satellite
	$('#geo').append(mapa);
}


// 3 params  - funcion que va a recibir la informacion de geol..
//			 - funcion que se ejecuta si no se accede a la info
//			 - objeto que podemos pasarle parametros
geo.getCurrentPosition(geo_exito, geo_error, opciones);  //Pedir ubicacion a navegador