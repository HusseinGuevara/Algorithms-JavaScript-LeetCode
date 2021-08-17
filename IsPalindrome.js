// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

const nums1 = 121
const expected1 = true

const nums2 = -121
const expected2 = false

const nums3 = 10
const expected3 = false

const nums4 = -101
const expected4 = false

var isPalindrome = function(nums) {
    var integerString = String(nums);
    var newString = "";

    // EDGE CASE 
    if(integerString.length == 1) {
        return true
    }

    for(var i = integerString.length - 1; i >= 0; i--) {
        newString += integerString[i];
        // console.log(newString);
    }
    if(newString == nums) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome(nums1));
console.log(isPalindrome(nums2));
console.log(isPalindrome(nums3));
console.log(isPalindrome(nums4));
