const number=[1,2,3,4,5];
console.log(number.reduce((sum,num)=>(sum+=num),0));
const path=require('path');
console.log(path);
console.log(path.dirname("C:/Users/Administrator/Desktop/day4/indexone.js"));
const file=require('fs')
file.readFile('C:/Users/Administrator/Desktop/day4/indexone.js',undefined,(err,data)=>{
    console.log(data.toString())
   console.log(data)

});
