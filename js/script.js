var texto = frases[Math.floor(Math.random() * frases.length)];

var frase = '<b>“' + texto.split('–')[0].trim() + '”</b>';
var autor = '<i>–' + texto.split('–')[1].trim() + '</i>';

document.querySelector('.frase').innerHTML = frase;
document.querySelector('.autor').innerHTML = autor;
