const path = require('path');

//Viser hvilken type separator som brukes i filstier, f.eks. fremoverslash eller bakoverslash
console.log(path.sep);

//Lager en fullstendig filsti på riktig normalisert måte
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

//Viser resultatfila av en filsti
const base = path.basename(filePath);
console.log(base);

//Finn absolutt filsti til en fil
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);