/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
 */

function expandedForm(num) {
    //P : int
    //R : string
    //E : expandedForm(42) => 40 + 2
    let numStr = num.toString().split('') // ['7','0','3','0','4']
    for(let i = 0; i < numStr.length; i++){
        for(let y = numStr.length - 1; y > i; y--){
            numStr[i] += '0';
        }
    }
    numStr = numStr.filter(value => !value.startsWith(0))
    return numStr.join(' + ')
}
