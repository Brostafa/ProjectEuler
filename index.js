/**
 * @problem_num
 * Problem 4
 * 
 * @title
 * Largest palindrome product
 * 
 * @desc
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * @problem
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 * @link
 * https://projecteuler.net/problem=4
 */

/**
 * Note: this solution is a brute force solution.
 * It will take LONG time to compute a high NUMBER_OF_DIGITS (e.g n > 3)
 * 
 * Big(O) = (10 ^ 2n)
 * 
 * NUMBER_OF_DIGITS = 1 => 100 operations              1e2
 * NUMBER_OF_DIGITS = 2 => 10,000 operations           1e4
 * NUMBER_OF_DIGITS = 3 => 1,000,000 operations        1e6
 * NUMBER_OF_DIGITS = 4 => 100,000,000 operations      1e8
 * NUMBER_OF_DIGITS = 5 => 10,000,000,000 operations   1e10
 */

const NUMBER_OF_DIGITS = 3

const isPalindrome = num => {
  const fromLeft = String(num)
  const fromRight = String(num).split('').reverse().join('')

  return fromLeft === fromRight
}

const solution = (digits) => {
  const startStr = String('9').repeat(digits)
  const startNum = Number(startStr)
  let max = 0

  for (let i = startNum; i > 0; i--) {
    for (let j = startNum; j > 0; j--) {
      const product = i * j

      if (isPalindrome(product)) {
        max = Math.max(product, max)
      }
    }
  }

  return max
}

console.log(
  solution(NUMBER_OF_DIGITS)
)