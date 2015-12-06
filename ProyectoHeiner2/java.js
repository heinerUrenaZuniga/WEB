var selogeo=false;
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
	 	selogeo=true;
	 	datosdellogeados=[];
	 	var datoslogeados = 
	 	{"username": document.getElementById("correo").value};
		datosdellogeados.push(datoslogeados);	
	 	localStorage['logeado']=JSON.stringify(datosdellogeados);
	 	window.close();
	 	window.open("badejaSalida.html");
	 	}
	 	else
	 	{
	 		document.getElementById("correo").value=" ";	 		
	 		document.getElementById("password").value=" ";
	 	}
	}
	
}
function cargarNombre()
{
	
	
	var logeado= JSON.parse(localStorage.getItem('logeado'));
	
	$('#label').html(logeado[0].username);
		
	
}
function versiestalogeado()
{
	if(selogeo===true)
	{
		alert("Bienvenido");
	}
	else
	{			
		window.close();	
		window.open("index.html");		
	}
}

function cargarCorreos()
 {
	// leo los correos del ls
	
	
	try {
		correosls = JSON.parse(localStorage['correos']);
		if(correosls===null)
		{
			return;
		}
	} catch(e) {
		correosls = [];
		console.log(e);
	}
	// loop users
	var correos_html = "";
	for (var i = 0; i < correosls.length; i++) {
		// add users to the table
		var c = correosls[i];
		correos_html += "<div class=darlevida onlick=mostrarCorreos();>"+c.para+"</div>"+"<div class=darlevida2>"+c.asunto+"</div><br>";	
	}
	$('#correos').html(correos_html);
	
}
function guardarCorreos()
{	
	var correos;
	try {
		correos = JSON.parse(localStorage['correos']);
	} catch(e) {
		correos = [];
		console.log(e);
	}	
	var correo = {
		"para": document.getElementById("email").value,
		"asunto": document.getElementById("asunto").value,
		"contenido":document.getElementById("contenido").value
	};	
	correos.push(correo);
	localStorage['correos'] = JSON.stringify(correos);
	alert("como tal");
}
