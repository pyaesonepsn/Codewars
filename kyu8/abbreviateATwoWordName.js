/*
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

function abbrevName(name){
    // input 'John Doe'
    // 1.split the name into two words['john','doe']
    // 2.take the first char of the word 'j'
    // 3.capitalize the char 'J'
    // 4. do the same for second letter 'D'
    // 5.join both char with dot 'J.D'
    // 6. return the joined characters
    return name.split(' ').map((char) => char[0].toUpperCase()).join('.')
}