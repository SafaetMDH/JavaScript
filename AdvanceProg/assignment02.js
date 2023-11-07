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
}

const bird = Object.create(animal)
    bird.canFly = true;
    bird.hasFeathers = true;

function birdCan(){ 
    for (elem of Object.keys(bird)) {   
        console.log(`${elem}: ${bird[elem]}`); 
    }
}
    
birdCan();  

//STEP 3

function animalCan() { 

    for (prop in bird) {    
        console.log(`${prop}: ${bird[prop]}`);  
    }
}
        
animalCan(); 