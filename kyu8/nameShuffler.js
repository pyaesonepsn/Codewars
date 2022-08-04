/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
 */

function nameShuffler(str){
    //P string
    //R string
    //E nameShuffler('john McClane') -> 'McClane john'
    // change string into array using split method ['john', 'McClane']
    // reverse the array and join method to change array into string
    const fullName = str.split(' ');
    return [fullName[1], fullName[0]].join(' ');
}