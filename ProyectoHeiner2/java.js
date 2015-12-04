function guardar()
{	
	var cuentas;
	try {
		cuentas = JSON.parse(localStorage['users']);
	} catch(e) {
		cuentas = [];
		console.log(e);
	}	
	var user = {
		"username": document.getElementById("correo").value,
		"password": document.getElementById("password").value
	};	
	cuentas.push(user);
	localStorage['users'] = JSON.stringify(cuentas);
}
function login()
{
	var cuentas;
	try {
		cuentas = JSON.parse(localStorage['users']);
	} catch(e) {
		cuentas = [];
		console.log(e);
	}
	for (var i = 0 ; i < cuentas.length ; i++)
	 {
	 	if(cuentas[i].username===document.getElementById("correo").value && cuentas[i].password === document.getElementById("password").value)
	 	{	 	
	 	datosdellogeados=[];
	 	var datoslogeados = 
	 	{"username": document.getElementById("correo").value};
		datosdellogeados.push(datoslogeados);	
	 	localStorage['logeado']=JSON.stringify(datosdellogeados);
	 	} 
	}
}
function cargarNombre()
{
	var logeado;
	try {
		logeado = JSON.parse(localStorage['logeado']);
	} catch(e) {
		logeado = [];
		console.log(e);
	}
	$('#label').html(logeado);
}