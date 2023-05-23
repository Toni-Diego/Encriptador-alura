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
var DESENCRIP_CODE = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"};
var terminos = ['ai', 'enter', 'imes', 'ober', 'ufat'];

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

function desencriptar(value){
	var salida = '', largo = value.length;
	let term_str = '('+terminos.join('|')+')';
	let regex = new RegExp(term_str,"g");
	salida = value.replace(regex, m => DESENCRIP_CODE[m]);
	return salida;
}

function copiar(){
    var text = document.getElementById('out-mensaje').value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
        document.getElementById('in-text').value= "";
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}

function ocultarOutImg(){
	var texto = document.getElementById('in-text').value;
	var textoAcentos = removeAccents(texto);
	texto = textoAcentos.toLowerCase();
	document.getElementById('img1').style.display = 'none';
	document.getElementById('t2').style.display = 'none';
	document.getElementById('p1').style.display = 'none';
	document.getElementById('out-mensaje').style.display = 'block';
	document.getElementById('boton3').style.display = 'inline-block';
	document.getElementById('boton4').style.display = 'inline-block';
	var area = document.getElementById('out-mensaje');
	area.value = encriptTexto(texto);
}

function ocultarOutDesencriptar(){
	var texto = document.getElementById('in-text').value;
	var textoAcentos = removeAccents(texto);
	texto = textoAcentos.toLowerCase();
	document.getElementById('img1').style.display = 'none';
	document.getElementById('t2').style.display = 'none';
	document.getElementById('p1').style.display = 'none';
	document.getElementById('out-mensaje').style.display = 'block';
	document.getElementById('boton3').style.display = 'inline-block';
	document.getElementById('boton4').style.display = 'inline-block';
	var area = document.getElementById('out-mensaje');
	area.value = desencriptar(texto);
}

function ocultarOutText(){
	document.getElementById('out-mensaje').value= "";
	document.getElementById('img1').style.display = '';
	document.getElementById('t2').style.display = '';
	document.getElementById('p1').style.display = '';
	document.getElementById('out-mensaje').style.display = 'none';
	document.getElementById('boton3').style.display = 'none';
	document.getElementById('boton4').style.display = 'none';
}