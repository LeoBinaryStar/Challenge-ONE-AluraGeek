function mostrarMensaje() {
	var enviado = document.querySelector(".enviado");
	enviado.style.display = "block";
}

var btnPie = document.getElementById("btn-pie");
btnPie.addEventListener("click", mostrarMensaje);