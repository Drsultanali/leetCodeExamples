//Example No-1:
/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII,
which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Given a roman numeral, convert it to an integer.*/
function romanToInt(s: string): number {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanToNumber[s[i]];
        const nextValue = romanToNumber[s[i + 1]];
        if (nextValue && currentValue < nextValue) {
            result = result + (nextValue - currentValue);
            i++;
        }
        else {
            result = result + currentValue
        }
  
    } 
        return result;

};
let s: string[] = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
let romanToNumber: {[key: string]: number} = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
console.log(romanToInt("II")) 

//Exmaple No-2:
/*You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?*/
function climbStairs(n: number): number {
    if ( n === 0 || n === 1) {
        return 1;
    }
    const numOfWays: number[] = new Array(n + 1).fill(0);
    numOfWays[0] = 1;
    numOfWays[1] = 1;
    for (let i = 2; i <= n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
    }
    return numOfWays[n];
};
console.log(climbStairs(15));
//Example No-3:
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      for (let m = i + 1; m < nums.length; m++) {
         if (nums[i] + nums[m] === target) {
            return [i, m];
         }
      }  
      
    }
    return []

};
let nums: number[] = [1, 2, 3, 4, 5];
let target: number = 9;
console.log(twoSum(nums, target));
//Example No-4:
/*Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
e.g: Input: strs = ["flower","flow","flight"]
    Output: "fl"*/
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0 ) {
        return "";
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let k = 1; k < strs.length; k++) {
            if (strs[k].charAt(i) !== strs[0].charAt(i)) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
let strs: string[] = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));

//Another apparoch to solve this problem:

function longestCommonPrefixes(strs: string[]): string {
    let sorted = strs.sort((a, b) => a < b? -1:1);
    let output = [];
    let firstword = sorted[0];
    let lastword = sorted[sorted.length - 1];
    for (let i = 0; i < firstword.length; i++) {
        if (firstword[i] == lastword[i]) {
            output.push(firstword[i]);
        }
        else {
            break;
        }
    }
    return output.join("");
};

console.log(longestCommonPrefixes(strs));
//Question No-5:
/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
e.g:
Input: s = "()"
Output: true*/

function isValid(str: string): boolean {
    let stack: string[] = [];
    const opneBrackets: string = "({[";
    const closeBrackets: string = ")}]"
    for (let char of str) {
        if (opneBrackets.includes(char)) {
            stack.push(char);
        }
        else {
            if (closeBrackets.includes(char)) {
                if (stack.length === 0) {
                return false;
                
            }
            let top = stack.pop();
            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[") 
            ) {
                return false;
            }
        }
    }
    }
    return stack.length === 0;
};
let str : string = "({{{{}}}))";
console.log(isValid(str));

//Qustion No-6:
/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
Input: n = 1
Output: ["()"]
 */
function generateParenthesis(n: number): string[] {
    function generate(partial: string, left: number, right: number) {
        if (right === 0 && left === 0) {
            result.push(partial)
            return;
        }
        if (left > 0) {
            generate(partial + "(", left -1, right);
        }
        if (right > left) {
            generate(partial + ")" , left, right -1);
        }
    }
    const result: string[] = [];
    generate("" ,n, n);
    return result;
};
const n: number = 3;
const output: string[] = generateParenthesis(n);
console.log(output);