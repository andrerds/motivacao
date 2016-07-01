var texto = frases[Math.floor(Math.random() * frases.length)];

var frase = texto.split('–')[0].trim();
var autor = texto.split('–')[1].trim();

document.querySelector('.frase').innerHTML = frase;
document.querySelector('.autor').innerHTML = autor;
