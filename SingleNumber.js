// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const nums1 = [2, 2, 1]
const expected1 = 1

const nums2 = [4, 1, 2, 1, 2]
const expected2 = 4

const nums3 = [1]
const expected3 = 1

const nums4 = [-1, -1, -2]
const expected4 = -2

var singleNumber = function (nums) {
    let dictionary = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in dictionary) {
        delete dictionary[nums[i]];
        } else dictionary[nums[i]] = 1;
    }
    return Object.keys(dictionary)[0];
};

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
console.log(singleNumber(nums3));
console.log(singleNumber(nums4));



