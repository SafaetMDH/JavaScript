//Spread Operator
let top7 = [
    "Singapur",
    "Switch",
    "Maldive",
    "Greece",
    "Mexico",
    "Miami",
    "India"
];

function showItenerary(place1, place2,place3,place4,place5,place6,place7){
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Continue trip to " + place3);
    console.log("Continue trip to " + place4);
    console.log("Continue trip to " + place5);
    console.log("Continue trip to " + place6);
    console.log("Finish with a visit to " + place7);
}

showItenerary(...top7);

//Joining ARRAYS

const fruits = ['Apple', 'Pear', 'Orange']
const berries = ['Streberry', 'Bluberry', 'Mulberry']
const fruitsNberries = [...fruits, ...berries]

console.log(fruitsNberries);//['Apple', 'Pear', 'Orange','Streberry', 'Bluberry', 'Mulberry']

//Joining OBJECTS

const flying = {wings : 2}
const car = {wheels : 4}
const flyingCar = {...flying, ...car}

console.log(flyingCar); //{wings : 2, wheels : 4}

//Add new memebrs without push()
let veggies = ['Onion','Persley'];
veggies = [...veggies, 'Carrot','Beetroot'];

console.log(veggies); //[ 'Onion', 'Persley', 'Carrot', 'beetroot' ]

//Convert STRING to ARRAY

const greet = "HELLO";
const arrayOfGreet = [...greet];

console.log(arrayOfGreet);

//Copy either an object or an array into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const carr2 = {...car1}

car1.speed = 201

console.log(car1.speed, carr2.speed)