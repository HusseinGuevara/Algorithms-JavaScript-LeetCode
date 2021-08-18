// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const nums1 = [2, 2, 1]
const expected1 = 1

const nums2 = [4, 1, 2, 1, 2]
const expected2 = 4

const nums3 = [1]
const expected3 = 1

var singleNumber = function(nums) {
    var firstIdx = 0;
    var secondIdx = firstIdx + 1;
    
    // EDGE CASE
    if(nums.lenght === 1) {
        return nums[0];
    }
    
    for(; secondIdx < nums.lenght; secondIdx++) {
        console.log(nums[firstIdx]);
        console.log(nums[secondIdx]);
    }
};
singleNumber(nums1);