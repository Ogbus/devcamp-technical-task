/*
  Write a function that accepts a positive integer and determines if it is a prime number. 
  The function should return true, if it is a prime number or false if it isn’t.
*/

function primeNumber(num) {
    if(num === 1) {
        return false;
    } else if(num === 2) {
        return true;
    } else {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
}