const car = {
    engine : true,
    steering : true,
    speed : "slow"
}

const sportsCar = Object.create(car);

sportsCar.speed = "fast";

console.log("The sportscar object: " , sportsCar);


for(prop in sportsCar){ // using FOR IN
    
    console.log(prop);

}

for(prop of Object.keys(sportsCar)){ //using FOR OF
    
    console.log(prop + ": " + sportsCar[prop]);

}