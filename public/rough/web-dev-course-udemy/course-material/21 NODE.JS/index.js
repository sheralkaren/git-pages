// console.log("how are you@");
// alert("what's this!");
// Native node module - like FileSystem

// const fs = require('fs');
// const { resolve } = require('path');

// const { readFile } = require('node:fs/promises');
// const { resolve } = require('node:path');
// let generateName = require('sillyname');
import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';


console.log(`I am ${randomSuperhero()}`);

let sillyName = generateName();

// WRITES TO A LOCAL FILE
// fs.writeFile("message.txt", "Howdy-Hello from Dee!", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// READS FROM A LOCAL FILE

// async function readFile01() {
//   try {
//     const filePath = resolve('./message.txt');
//     const contents = await readFile(filePath, {encoding: 'UTF-8'});
//     console.log(`${contents} -- with a length of ${contents.length}`);
//   }
//   catch(err){
//     console.log(err.message);
//   }
// }

// readFile01();

console.log(`A silly name ${sillyName}`);



