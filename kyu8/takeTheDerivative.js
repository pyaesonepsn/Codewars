/*
In this case, the function should multiply 7 and 8, and then subtract 1 from 8.
It should output "56x^7", the first number 56 being the product of the two numbers,
and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7"
derive(5, 9) --> this should output "45x^8"
 */

function derive(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}