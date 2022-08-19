/*
Task
You will be given an array of numbers.
You have to sort the odd numbers in ascending order
while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

function sortArray(array) {
    // create the odd array, even array and result array
    let oddArray = [];
    let evenArray = [];
    let result = [];
    // loop the array and check condition if the element is even or not
    for(let i = 0; i < array.length; i++){
        // if it is even, push the element into even array
        if(array[i] % 2 === 0){
            evenArray.push(array[i]);
        } else {
            // if it is odd, push the element into odd array
            oddArray.push(array[i]);
        }
    }
    // sort in ascending order
    oddArray.sort((a,b) => a - b);

    // oddArray = [3,5];
    // evenArray = [8,6,4];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            result.push(evenArray.shift());
        } else {
            result.push(oddArray.shift());
        }
    }
    return result;

}