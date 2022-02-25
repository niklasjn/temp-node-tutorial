const { readFileSync, writeFileSync } = require('fs');
/* Samme som 
	const fs = require('fs')
	const file = fs.readFileSync()
	osv
*/
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
	'./content/result-sync.txt', 
	'Here is the result: ' + first + ", " + second + '\n',
	{ flag: 'a'} //append, altså legge til i stedet for å endre
);
console.log('done with this task');
console.log('starting the next task');
