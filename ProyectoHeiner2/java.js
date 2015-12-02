var cuentas= JSON.parse(localStorage.getItem('users'));
function guardar()
{	
	var nombre=Document.getItemByID("correo").value;
	var password= Document.getItemByID("password").value;
	var user = {
		"username": nombre,
		"password": password
	};
	if(cuentas===null)
	{
		cuentas.push(user);
	}
	localStorage.setItem('users', JSON.stringify(users));
}
