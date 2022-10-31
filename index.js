/**
 * @problem_num
 * Problem 15
 * 
 * @title
 * Lattice paths
 * 
 * @desc
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * https://projecteuler.net/project/images/p015.png
 * 
 * @problem
 * How many such routes are there through a 20×20 grid?
 * 
 * @link
 * https://projecteuler.net/problem=15
 */

const GRID_SIZE = 20

const factorial = n => {
  if (n === 1) return 1
  
  return n * factorial(n - 1)
}

// We can use Bionomial Co-effecient to solve this
// https://en.wikipedia.org/wiki/Binomial_coefficient
const solution = (k) => {
  const n = 2 * k
  const numerator = factorial(n)
  const denominator = factorial(k) * factorial(n - k)
  
  return numerator / denominator
}

const now = Date.now()
const answer = solution(GRID_SIZE)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)
