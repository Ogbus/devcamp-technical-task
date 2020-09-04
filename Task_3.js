// Write a function that accepts an array of positive integers and returns an array of all prime 
// numbers from the given array. A prime number is a number that is only divisible by 1 and itself.

function primeArr(arr) { 
   
  //Test for Prime Number 
    
  function isPrime(testNo){ 
    
    var result = false; 
    for(var n = testNo - 1; n > 1; n--){ 
        result = (testNo % n === 0) + result; 
    } 
      
    if(result === 0 && testNo > 1){ 
      return true; 
    }return false; 
  } 
    
  //Test for Prime Number 
  
  var newArr = [];  
    
  for(n=0; n<arr.length; n++){ 
    if(isPrime(arr[n])){ 
      newArr.push(arr[n]); 
    } 
  } 
    
  return newArr; 
} 


// function sshowPrimeNumbers(arr) {
//   let primeNumbers = [];
//   arr.map((nums) => {
//       for(let x = 2; x <= Math.sqrt(nums); x++) {
//           if(nums % x === 0) {
//               return false;
//           } else {
//               primeNumbers.push(nums);
//           }
//       }
//   });
//   return primeNumbers;
// }