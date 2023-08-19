import {
	clientServices
} from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get("id");

	if (id === null) {
		window.location.href = "../agregarProducto.html"
	}

	const imagen = document.querySelector("[data-imagen]").value;
	const nombre = document.querySelector("[data-nombre]").value;
	const precio = document.querySelector("[data-precio]").value;

	try {
		const perfil = await clientServices.detalleCliente(id);
		if (perfil.imagen && perfil.nombre && perfil.precio) {
			imagen.value = perfil.imagen;
			nombre.value = perfil.nombre;
			precio.value = perfil.precio;
		} else {
			throw new Error();
		}

	} catch (error) {
		alert("Error, intente de nuevo por favor");
	}


};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get("id");
	const imagen = document.querySelector("[data-imagen]").value;
	const nombre = document.querySelector("[data-nombre]").value;
	const precio = document.querySelector("[data-precio]").value;
	console.log(nombre, "", precio);
	clientServices.actualizarCliente(imagen, nombre, precio, id).then(() => {
		window.location.href = "../screens/edicion_concluida.html"
	});
});