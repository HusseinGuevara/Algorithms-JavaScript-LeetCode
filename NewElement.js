const num1 = [3,2,2,3]
const val1 = 3
const expected1 = [2,2,"_","_"]

const num2 = [0,1,2,2,3,0,4,2]
const val2 = 2
const expected2 = [0,1,3,0,4,"_","_","_"]

var removeElement = function(nums, val) {
    var count = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == val ) {
            nums[i] = "_"
        } else {
            count++;
        }
    }
    console.log(count);
    return  nums;
}
console.log(removeElement(num1,val1));
console.log(removeElement(num2,val2));