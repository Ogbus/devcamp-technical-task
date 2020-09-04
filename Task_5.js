/*
  Write a method to replace all spaces in a string with '%20'.
  Example
  Input: "Mr John Smith " 
  Output: "Mr%20John%20Smith"
*/

function replaceMee(str) {
    let mainStr = str.split(' ').join('%20')
    return mainStr;
}

