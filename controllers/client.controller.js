import {
	clientServices
} from "../service/client-service.js"

//backticks
const crearNuevaLinea = (imagen, nombre, precio) => {
	const linea = document.createElement("div+class.card");
	const contenido = `
		<img src = "${imagen}}" >
		<hr>
		<h2 class = "titulo-producto" > ${nombre} < /h2>
		<p class = "precio" > $${precio} </p>
		<p class = "codigo" > ${id} < /p>
`;
	linea.innerHTML = contenido;
	const btn = linea.querySelector("btn-enviarProducto");
	btn.addEventListener("click", () => {
		const id = btn.id;
		clientServices.eliminarCliente(id).then(respuesta => {
			console.log(respuesta);
		}).catch((err) = alert("Ocurrió un error"))
	});
	return linea;
};

const productos = document.querySelector("[data-form]");

clientServices
	.listaClientes()
	.then((data) => {
		data.forEach((nombre, email, id) => {
			const nuevaLinea = crearNuevaLinea(nombre, email, id);
			productos.appendChild(nuevaLinea);
		});
	})