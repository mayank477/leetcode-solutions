/**
 * @param {string} s
 * @return {boolean}
 */


// clean the string 
//lowercase 
// call the palindrome function 

function checkPalindrome(str){
    let left = 0;
    let right = str.length-1;
    while (left<right){
        if (str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var isPalindrome = function(s) {
    const regex = /[^a-zA-Z0-9]/g
    const clean = s.replace(regex,'').toLowerCase();
    return checkPalindrome(clean);
};