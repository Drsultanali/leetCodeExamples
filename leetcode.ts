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