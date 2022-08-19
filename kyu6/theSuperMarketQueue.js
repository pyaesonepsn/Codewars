/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
 */

function queueTime(customers, n) {
    // create an array of length n representing the tills
    // each till is given a value of 0 to represent initial waitTime before the queue begins.
    const tills = Array(n).fill(0);
    // gets through the queue of the customer waitTime
    for(let waitTime of customers){
        // find the till with the least waitTime on it, adds the next customer's waitTime on it
        const lowestWaitTill = tills.indexOf(Math.min(...tills));
        tills[lowestWaitTill] += waitTime;
    }
    // end result is the waitTime (load) on the tills are distributed optimally.
    // The waitTime of the tills with the heaviest load represents the total time taken
    return Math.max(...tills);
}