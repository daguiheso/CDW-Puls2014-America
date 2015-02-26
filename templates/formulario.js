// $(function(){
// 	alert("hola");	
// })

// alert("hola");	

var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $("#contenido"),
	$primerPost = $(".item").first();

//Para al recargar la pagina, guarde lo que habia en los inputs
if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}


// JS cada segundo ejecuta esta funcion y esa funcion
// se va a acordar lo que uno va a estar  tipeando
var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
},1000);

function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $primerPost.clone();

	$clone.find(".titulo_item a")
		.text(titulo)
		.attr("href", url);

	// $clone.hide();

	$list.prepend($clone);

	mostrarFormulario();

	//Limpiando inputs
	$titulo.val('');
	$url.val('');

	$clone.fadeIn();


	return false;
}

// Eventos

$button.click( mostrarFormulario);
$form.on("submit", agregarPost);