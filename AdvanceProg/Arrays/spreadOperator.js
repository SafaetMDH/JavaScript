//Spread Operator
let top7 = [
    "Singapur",
    "Switch",
    "Maldive",
    "ABC",
    "EFG",
    "GRD",
    "GHT"
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


