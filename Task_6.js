/*
  Write a function that takes two parameters, an array and some number. The function should 
  determine whether any three numbers in the array add up to the number. If it does, the 
  function should return the numbers as an array. If it doesn’t, the function should return -1.
  Example
  Input: [1, 2, 3, 4, 5, 6], 6
  Output: [1, 2, 3]
*/

function twoSuum(arr, target) {
    let res = [];
    let indexes = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for(let x = j + 1; x < arr.length; x++) {
                if (target === arr[i] + arr[j] + arr[x] && !indexes.includes(i) && !indexes.includes(j) && !indexes.includes(x)) {
                    res.push([arr[i], arr[j], arr[x]]);
                    indexes.push(i);
                    indexes.push(j);
                    indexes.push(x);
                }
            }
        }
    }
    if(resp.res === true) {
        return res;
    } else {
        return '-1';
    }
}
