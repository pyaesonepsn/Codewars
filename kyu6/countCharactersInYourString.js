/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 */

const count = (string) => {
    // abaccd => {'a':2, 'b':1, 'c':2, 'd':1}
    //P: string, no whitespace no capital letter
    //R: object
    // sanitise string, replace the char that isn't (A-Za-z/g) with empty substring
    // loop through the string, if(obj[char]) is truthy, obj[char]++ else obj[char] = 1
    let obj = {}
    const str2 = string.toLowerCase().replace(/[^A-Za-z]/g,'');
    for(let char of str2){
        if(obj[char]){
            obj[char]++;
        }else{
            obj[char] = 1;
        }
    }
    return obj;
}

console.log(count('aabbcddddf'));
