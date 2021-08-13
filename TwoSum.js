// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
const nums1 = [2, 7, 11, 15]
const target1 = 9
const expected1 = [0, 1]

const nums2 = [3,2,4] 
const target2 = 6
const expected2 = [1,2]

const nums3 = [3,3]
const target3 = 6
const expected3 = [0,1]

const nums4 = [3, 2, 4]
const target4 = 6
const expect4 = [1, 2]

const nums5 = [2, 5, 5, 11]
const target5 = 10
const expect5 = [1, 2]

var twoSum = function(nums, target) {
    var newArr = [];
    for(var i = 0; i < nums.length; i++) {
        // console.log(i);
        
        for(var j = nums.length - 1; j >= 0; j--) {
            // console.log(j);
            if((nums[i] + nums[j]) == target) {
                console.log(nums[i] + nums[j])
                newArr.push(i);
                newArr.push(j);
                return newArr
            
            }
        }
    }
};

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
console.log(twoSum(nums4, target4));
console.log(twoSum(nums5, target5));
