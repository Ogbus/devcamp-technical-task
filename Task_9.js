/*
  Write a function that takes a string and determines if the string is a palindrome. A palindrome 
  is a word, number, phrase, or other sequence of characters which reads the same backward as forward, 
  such as madam, racecar. The function should return “Yes” if the word is a palindrome and “No” if it 
  isn’t. You are not to use the programming language’s existing function or method, if any.
*/

function check_For_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
    // Check whether the string is empty or not
    if(cstr==="") {
        console.log("Nothing found!");
        return false;
    }
    // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        // If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            console.log("Entry is a palindrome");
            return true;
        } else {
        // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
        // Compare characters and drop them if they do not match 
        if (cstr[x] != cstr.slice(-1-x)[0]) {
            console.log("No");
            return false;
        }
    }
    console.log("Yes");
    return true;
}