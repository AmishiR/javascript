// let name= "Amishi"
// let convert = Number(name)
// console.log(typeof name)
// console.log(name)

// let convert2 = Boolean(name)
// console.log(name) 
// console.log(convert2) 
// non-empty-string => true boolean

// let status=" "
// let value= 0 
// let convert3=Boolean(status)
// let convert4=Boolean(value)
// console.log(status)//will print whitespace
// console.log(typeof value)//boolean
// console.log(convert3)//truthly as it contains space 
// console.log(typeof convert4) //boolean 
// console.log(convert4)//false as 0 converted to boolean

// let score= "125abc"
// let score2="125"
// let convert5 = Number(score)
// let convert6= Number(score2)
// console.log(convert5)
// console.log(convert6)
/////"125abc"=>Nan on number conversion
/////where as 125 in string will be number in 125

// let a=undefined
// let b =null
// let convert7=Number(a)
// let convert8=Number(b)
// console.log(convert7)
// console.log(convert8)
/////undefined would give NaN on conversion to number and null will give 0

// let emptyArray = [];
// let emptyFunction = function() {};

// console.log(Boolean(emptyArray)); 
// console.log(Boolean(emptyFunction));

/////falsely values- 0,on,"",null,undefined,NaN
/////truthly values- "0"," ","false",[],fucntion(){}