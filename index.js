/**
 * @problem_num
 * Problem 6
 * 
 * @title
 * Sum square difference
 * 
 * @desc
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * 
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * 
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
 * 3025 - 385 = 2640
 * 
 * @problem
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 * 
 * @link
 * https://projecteuler.net/problem=6
 */

const SUM_TO = 100

const solution = (max) => {
  // sum = n(n + 1)/2
  const sum = max * (max + 1) / 2
  const squareOfSums = Math.pow(sum, 2)
  let sumOfSquares = 0

  for (let i = 1; i <= max; i++) {
    sumOfSquares += Math.pow(i, 2)
  }

  return squareOfSums - sumOfSquares
}

const now = Date.now()
const answer = solution(SUM_TO)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)