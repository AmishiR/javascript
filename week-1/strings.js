const name="Amishi"////primitive string
const name2 = new String("Ranjan")////string object created usinng string constructor

//console.log(typeof name)
//console.log(typeof name2)

const array1=[2,5,11,20]
let index = 3
// console.log(`at index ${index} the element is ${array1.at(index)}`) ////for extracting element from array at given index

const string ="It was a sunny day"
let index2=5
// console.log(`at index ${index2} the element is ${string.charAt(index2)}`) //// for extracting element of index from string

//console.log(string.charCodeAt(0))////returns UTF-16 code unit value of the character


const str2 = String.fromCodePoint(0x1F600); // 😀 (grinning face emoji)
// console.log(str2); // Output: "😀"
const str = String.fromCharCode(72, 101, 108, 108, 111); 
// console.log(str); // Output: "Hello"


const array2 = ['a', 'b', 'c'];
const array3 = ['d', 'e', 'f'];
const array4 = array2.concat(array3);

// console.log(array4);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

let myString = "Hello!";
let anotherString = new myString.constructor("Hi there!");
// console.log(anotherString); 
//console.log(typeof anotherString); // Output: "Hi there!"


const str1 = 'Cats are the best!';

//console.log(str1.endsWith('best!'));

 //console.log(str1.endsWith('best', 18));
//console.log(str1.endsWith('best', 17));//checks till what index is the string 



const array5 = [1, 2, 3];
// console.log(array5.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// Expected output: true

// console.log("Blue Whale".indexOf("Blue")) // returns  0
//console.log("Blue Whale".indexOf("Whale", 0)) // returns  5 as it is on index 5 it starts searching from index 0

// console.log("canal".lastIndexOf("a")) // returns 3
// console.log("canal".lastIndexOf("a", 2)) // returns 1
// console.log("canal".lastIndexOf("a", 0)) // returns -1

const str3 = "The rain in Spain";
const result = str3.match(/ain/);
//console.log(result);//////The method returns an array with:The first match (as a string).Any capturing groups (if specified in the regex).The index of the match.The input string.
const result2 = str3.match(/ain/g);/////(global) flag: returns array of all matches
 //console.log(result2);
const result3 = str3.match(/(r)(ain)/);
//console.log(result3);///////"rain" is the overall match, "r" is the first captured group, and "ain" is the second captured group.


const str4= 'Breaded Mushrooms';
//console.log(str4.padEnd(25, '!'));// pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length.

const str5 = '5';
//console.log(str5.padStart(2, '0'));/////pads at beginning with 0 

///console.log("abc".repeat(-1))// RangeError
//console.log("abc".repeat(0)) // ''
// console.log("abc".repeat(1)) // 'abc'
// console.log("abc".repeat(2)) // 'abcabc'

const str7="Vicks"
//console.log(str7.replace("cks", "kram"))

// console.log("aabbcc".replaceAll("b", "."))



const str6 = 'The quick brown fox jumps over the lazy dog.';
console.log(str6.slice(4, 19));// Expected output: "quick brown fox"
console.log(str6.slice(-4));// Expected output: "dog."