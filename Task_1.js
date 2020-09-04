/*
  Write a function that takes an array of positive integers. The function should calculate 
  the sum of all even and odd integers and return an array containing the sums. The first index 
  in the returned array should hold the sum of the even integers and the second index should hold 
  the sum of the odd integers.
*/

function addEvenAndOdd(arr) {
    let even = 0;
    let odd = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            even = even + arr[i];
        }

        if(arr[i] % 2 !== 0) {
            odd = odd + arr[i];
        }
    }
    newArr.push(even);
    newArr.push(odd);
    return newArr;
}