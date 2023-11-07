
//Function with Index
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(a, b) {
    console.log(b +".",a)
}

fruits.forEach(appendIndex);

//Function inside
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});