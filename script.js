function ocultar(id){
document.getElementById(id).style.display = 'none';
}

function mostrar(id){
document.getElementById(id).style.display = 'block';
}

function ocultarOutImg(){
	document.getElementById('img1').style.display = 'none';
	document.getElementById('t2').style.display = 'none';
	document.getElementById('p1').style.display = 'none';
	document.getElementById('out-mensaje').style.display = 'block';
	document.getElementById('boton3').style.display = 'block';
}

function ocultarOutText(){
	document.getElementById('img1').style.display = '';
	document.getElementById('t2').style.display = '';
	document.getElementById('p1').style.display = '';
	document.getElementById('out-mensaje').style.display = 'none';
	document.getElementById('boton3').style.display = 'none';
}