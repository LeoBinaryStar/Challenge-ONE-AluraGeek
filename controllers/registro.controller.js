import {
	clientServices
} from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const imagen = document.querySelector("[data-imagen]").value;
	const nombre = document.querySelector("[data-nombre]").value;
	const precio = document.querySelector("[data-precio]").value;
	clientServices.crearCliente(imagen, nombre, precio)
		.then(() => {
			window.location.href = "../todosArticulos.html";
		})
		.catch((err) => console.log(err));
})