const str1="Hello"
const str2="Amishi"

/////TEMPLATE LITERAL
const result1= `${str1} there ${str2}`;
//console.log(result1)

/////Using + Operator
//console.log(str1+ " "+str2)

/////// Using concat()
const result2= str1.concat(" there ",str2 ," have an amazing day ")
//console.log(result2)

/////USING JOIN
const result3= [str1 ,str2].join(" have an amazing day ");
//console.log(result3)
