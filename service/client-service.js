//CRUD - Métodos HTTP
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE

//Fetch API
const listaClientes = () =>
	fetch("http://localhost:3000/agregarProducto.html").then((respuesta) => respuesta.json());

const crearCliente = (imagen, nombre, precio) => {
	return fetch("http://localhost:3000/agregarProducto.html", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			imagen,
			nombre,
			precio,
			id: uuid.v4()
		}),
	});
};

const eliminarCliente = (id) => {
	return fetch(`http://localhost:3000/agregarProducto.html${id}`, {
		method: "DELETE",
	});
};

const detalleCliente = (id) => {
	return fetch(`http://localhost:3000/agregarProducto.html${id}`).then((respuesta) =>
		respuesta.json()
	);
};

const actualizarCliente = (nombre, email, id) => {
	return fetch(`http://localhost:3000/agregarProducto.html${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application / json"
			},
			body: JSON.stringify
		}).then((respuesta) => respuesta)
		.catch((err) => console.log(err));
};

export const clientServices = {
	listaClientes,
	crearCliente,
	eliminarCliente,
	detalleCliente,
	actualizarCliente,
};



/*
data.forEach((perfil) => {
	const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
	table.appendChild(nuevaLinea);
});
*/