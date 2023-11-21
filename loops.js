
let myArray = ["ABC", "DEF", "GHI", "JKL"];

//Using for loop
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

//Using forEach
myArray.forEach(function(i){
    console.log(i);
})

//Using forOf
for(let i of myArray){
    console.log(i);
}