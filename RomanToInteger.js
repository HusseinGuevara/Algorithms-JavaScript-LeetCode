// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const nums1 = "III"
const expected1 = 3;

const nums2 = "IV"
const expected2 = 4;

const nums3 = "IX"
const expected3 = 9;

const nums4 = "LVIII" 
const expected4 = 58;

const nums5 = "MCMXCIV"
const expected5 = 1994;

var romanToInt = function(nums) {
    var map = new Map();
    
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);

    // EDGE CASE 
    if(nums.length === 1) {
        return map.get(nums[0])
    }

    // Store last value and comapre to see if smaller or greater
    var sum = map.get(nums[nums.length - 1]);
    var currentPointer = nums.length - 2;
    
    for(; currentPointer >= 0; currentPointer--) {
        // console.log(currentPointer);
        if(map.get(nums[currentPointer + 1]) > map.get(nums[currentPointer])) {
            sum -= map.get(nums[currentPointer]);
        } else {
            sum += map.get(nums[currentPointer]);
        }
    }   
    return sum;
}
console.log(romanToInt(nums1));
console.log(romanToInt(nums2));
console.log(romanToInt(nums3));
console.log(romanToInt(nums4));
console.log(romanToInt(nums5));


