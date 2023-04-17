import { readFile, writeFile } from "fs/promises";

// creating a url object for the file path
const filePath = new URL("./index.html", import.meta.url);
// import.meta.url gives the path of the current file in ES6 Moduling
// the syntax of URL object is new URL(path, base) where path is relative and base is absolute
let contents = await readFile(filePath, { encoding: "utf-8" }); // since its a top level module we can use await
console.log("BEFORE -> ", contents); // prints the contents of the file

// preparing a data object to write to the file
const oldData = {
  name: "Milind Milind",
  profession: "Software Engineer",
  age: 23,
};

// new data for illustration purposes
const data = {
  name: "Milind Kushwaha",
  profession: "DevOps Engineer",
  age: 23,
};

for (const [key, value] of Object.entries(data)) {
  contents = contents.replace(`{{${key}}}`, value);
}
// Object.entries() is a method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
// There are other helper functions liek Object.keys() Object.values() which can be used to get the keys and values of an object.

console.log("AFTER ->", contents); // prints the contents of the file with the data object values

// await writeFile(filePath, contents);

// for a new file we can use the following syntax
// await writeFile(new URL("./newIndex.html", import.meta.url), contents);

// creating one with new data
await writeFile(new URL("./devIndex.html", import.meta.url), contents);

// this is how templating works and now you might have a idea how react works under the hood essentially it is a templating engine

// so when there is humongous inflow of data you just cant read the whole mamoth file and then replace the values and then write it back to the file
// so we use streams to do this efficiently where we distribute it into small chunks of data and then process it and then write it back to the file
// read it chunk by chunk and write it chunk by chunk

/*
So like when you watcha video in the frontend the browser does not load the whole video atonce it loads it in chunks and then plays it
In order to understand that we can study streams in nodejs as a concept

Stream is an abstract interface for working with streaming data in Node.js.
The node:stream module provides a base API that makes it easy to build objects that implement the stream interface.
*/


// TIMESTAMP: 00:53:30