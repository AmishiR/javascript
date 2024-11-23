let datecreated = new Date()
//console.log(datecreated)
// console.log(datecreated.toDateString())         ////Day-Month-Date-Year
// console.log(datecreated.toJSON()).             //// Year-Month-Value
// console.log(datecreated.toString())           ////Day-Month-Date-Year-Time
// console.log(datecreated.toTimeString())      ////Time
// console.log(datecreated.toISOString())      ////Year-Date-Value
// console.log(typeof(datecreated))              ////OBJECT



////we can add values in Date Object
let datecreated2 = new Date(23,0,1,5,6)
// console.log(datecreated.toString())      ////Gives equivalent date and time filled in bracket


let TimeStamp= Date.now()
// console.log(TimeStamp)    //milisec value from 1st Jan 1970
// console.log(datecreated.getTime())      ///another way to get value
// console.log(Math.floor(Date.now()/1000))      ///in secs and math to not get decimal

let datecreated3= new Date
// console.log(datecreated3.getDate())
// console.log(datecreated3.getHours())

// console.log(`${datecreated3.getDate()} and hours is ${datecreated3.getHours()}`)

// console.log(datecreated2.toLocaleString('default',{
//     weekday: "long",
// }))
/////long - MONDAY
////narrow-M