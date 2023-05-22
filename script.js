function ocultar(id){
document.getElementById(id).style.display = 'none';
}

function mostrar(id){
document.getElementById(id).style.display = 'block';
}

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var ENCRIP_CODE = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};

function charToEncrip(char) {
   return (ENCRIP_CODE[char]||'');
}

function encriptTexto(value){
	var salida = '', largo = value.length;
	salida = value.replace(/[aeiou]/gi, m => ENCRIP_CODE[m]);
	/*for(var i=0; i<largo; i++){
		salida+=charToEncrip(value.charAt(i));
	}*/
	return salida;
}

function ocultarOutImg(){
	var texto = document.getElementById('in-text').value;
	var textoAcentos = removeAccents(texto);
	texto = textoAcentos.toLowerCase();
	document.getElementById('img1').style.display = 'none';
	document.getElementById('t2').style.display = 'none';
	document.getElementById('p1').style.display = 'none';
	document.getElementById('out-mensaje').style.display = 'block';
	document.getElementById('boton3').style.display = 'block';
	var area = document.getElementById('out-mensaje');
	area.value = encriptTexto(texto);
}

function ocultarOutText(){
	document.getElementById('img1').style.display = '';
	document.getElementById('t2').style.display = '';
	document.getElementById('p1').style.display = '';
	document.getElementById('out-mensaje').style.display = 'none';
	document.getElementById('boton3').style.display = 'none';
}