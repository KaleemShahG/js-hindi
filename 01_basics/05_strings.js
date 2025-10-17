const name = " kaleem ";
const repoCount =  50 ;

console.log(name  + repoCount  + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('kaleem-sh-com')
console.log(gameName.__proto__);

console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  kaleem     shah        "
console.log(newStringOne)
console.log(newStringOne.trim());

const url ="https//kaleemshah.com/hitesh%20syed"


console.log( url.replace('%20', 'kaleem'));
console.log( url.replace('hitesh', 'syed'));
console.log( url.replace('syed', 'shah'));


console.log(url.includes('abdullah'));

console.log(gameName.split('h'));
