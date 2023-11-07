
//Filter the number which are > 20
const nums = [0,10,20,30,40,50];
const filtered = nums.filter( function(num) {
    return num >= 30;
})

console.log(filtered)

/*
Explanation:

const nums = [0, 10, 20, 30, 40, 50]; initializes an array called nums with six elements.

nums.filter(function(num) { return num > 20; }); applies the filter method to the nums array. The callback function takes each element (num) and returns true if the number is greater than 20, or false otherwise.

The result of the filter operation is a new array that contains only the elements that satisfy the condition. In this case, [30, 40, 50] are the numbers greater than 20.

So, filteredArray will be [30, 40, 50].
*/