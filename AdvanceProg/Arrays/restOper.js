//Rest Operator

let top7 = [
    "Singapur",
    "Switch",
    "Maldive",
    "Greece",
    "Mexico",
    "Miami",
    "India"
];

const [] = top7;

const[first, second, third, ...secondVisit] = top7

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


function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);