$(function(){
	//1 param => recurso a obtener
	//2 param => callback que se ejecuta cuando termina la funcion
	$.get('logos_footer.html', function(codiguito){
		$('footer .logos').append(codiguito);
		$('header').append(codiguito);
	});
});