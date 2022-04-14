document.getElementById("cerrar").addEventListener('click', cerrar);
document.getElementById("manzanas").addEventListener('click', abrirVentana);
ventana = document.getElementById("ventana");

function abrirVentana(){
	ventana.style.top = "50%";
}

function cerrar() {
	ventana.style.top = "-50%";
}