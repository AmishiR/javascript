const myArray =[0,1,2,3,4,"num"]
// console.log(typeof(myArray));        ///OBJECT
//using constructor 
const myArray2= new Array(1,2,3,4)
// console.log(myArray[1]);     ///1

//Array Methods
myArray.push(6)
myArray.push(7)
// console.log(myArray);             //adds 6 and 7 to last

myArray.pop()
// console.log(myArray);            //removes from last 

myArray.unshift(10)                 ///adds elements to beginning shifting all is time consuming for bigger datas
// console.log(myArray);            ///[10,0,1,2,3,4,'num',6]

myArray.shift()
// console.log(myArray);            ///removes element from front reducing the length 

const newarr=myArray.join()         ///converts array into binded string 
// console.log(newarr);         
// console.log(typeof(newarr));     ///string

//slice,splice

console.log("A ",myArray);
// console.log(myArray.slice(1,3));    //gets elements from index 1&2

console.log("B ",myArray);

const newarr2 = myArray.splice(1,3)
// console.log(typeof(newarr2));          //OBJECT
// console.log(myArray.splice(1,3));   //cuts out the elements into another array
//  console.log("C ",myArray);            //[0,4,'num',6]