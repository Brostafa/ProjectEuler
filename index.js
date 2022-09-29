/**
 * @problem_num
 * Problem 1
 * 
 * @title
 * Multiples of 3 or 5
 * 
 * @desc
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * 
 * @problem
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const DIVIDERS = [3, 5]
const MAX_NUM = 1000

const isDivisible = num => {
  for (const divider of DIVIDERS) {
    if (num % divider === 0) {
      return true
    }
  }

  return false
}

const solution = (maxVal) => {
  let sum = 0

  for (let i = 1; i < maxVal; i++) {
    sum += isDivisible(i) ? i : 0
  }

  return sum
}

console.log(
  solution(MAX_NUM)
)