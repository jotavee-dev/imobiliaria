var input = require('fs').readFileSync('admin/1013.txt', 'utf8');
var lines = input.split('\n');

let linha1 = lines[0].split(' ');
let linha2 = lines[1].split(' ');

let x1 = parseFloat(linha1[0]);
let y1 = parseFloat(linha1[1]);
let x2 = parseFloat(linha2[0]);
let y2 = parseFloat(linha2[1]);

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


console.log(distancia.toFixed(4));