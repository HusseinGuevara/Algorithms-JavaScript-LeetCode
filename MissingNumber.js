// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

const nums1 = [3,0,1]
const expected1 = 2

const nums2 = [0,1]
const expected2 = 2

var missingNumber = function(nums) {
    var sorted = nums.sort();
    console.log(sorted);

    for(var i = 0; i < sorted.length; i++) {
        if(sorted[i] !== sorted[i + 1]) {
            console.log(sorted[i]);
        }
    }

};
missingNumber(nums1);