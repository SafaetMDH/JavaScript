//STEP 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){

    for(prop of dairy){
        console.log(prop);
    }
}

logDairy();

//STEP 2

const animal = {

    canJump: true
    
    };
    
const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

function birdCan(){

    for(prop of Object.entries(bird)){
        console.log(prop);
    }
} 

birdCan();

//STEP 3


function animalCan() { 

    for (prop in bird) {    
        console.log(`${prop}: ${bird[prop]}`);  
    }}
        
animalCan(); 