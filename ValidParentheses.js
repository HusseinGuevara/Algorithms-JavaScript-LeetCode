// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

const str1 = "()";
const expected1 = true;

const str2 = "(){}[]";
const expected2 = true;

const str3 = "(]";
const expected3 = false;

var validParentheses = function(str) {
    // EDGE CASE 
    if(str.length % 2 !== 0) {
        return false;
    }
    var object = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    var stack = [];

    for(var idx of str) {
        object[str[str.length - 1]] === idx ? stack.pop() : stack.push(idx);
    }
    return stack.length === 0 ? true : false;
}
console.log(validParentheses(str1));
console.log(validParentheses(str2));
console.log(validParentheses(str3));