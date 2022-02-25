// GLOBALS - NO WINDOW !!!!

// __dirname	- path to current directory
// __filename	- file name
// require		- function to use modules (CommonJS)
// module 		- info about current module (file)
// process 		- info about env where the program is being executed

//these are just some of the global variables. global variables can be accssed anywhere in your program at all times

console.log(__dirname);
console.log(__filename);
setInterval(() => {
	console.log("hello world");
}, 1000);
