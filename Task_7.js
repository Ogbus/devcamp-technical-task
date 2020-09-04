/*
  Write a function that takes an array of positive integers and calculates the standard 
  deviation of the numbers. The function should return the standard deviation.
*/

// function for calculating variance
function variance(arr, count) {
    let sum = 0;

    // computing mean average of elements
    for(let i = 0; i < count; i++) {
        sum += arr[i];
    }
    let mean = sum / count;

    // computing sum squared differences with mean
    let squaredDiff = 0;
    for(let i = 0; i < count; i++) {
        squaredDiff += (arr[i] - mean) * (arr[i] - mean);
    }
    return squaredDiff / count;
}

// Computing standard deviation
function standardDeviation(arr, count) {
    return Math.sqrt(variance(arr, count));
}
