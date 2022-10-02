/**
 * @problem_num
 * Problem 9
 * 
 * @title
 * Special Pythagorean triplet
 * 
 * @desc
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a^2 + b^2 = c^2
 * For example, 32 + 42 = 9 + 16 = 25 = 5^2.
 * 
 * @problem
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 * 
 * @link
 * https://projecteuler.net/problem=9
 */

/**
 * BigO = O(N^2)
 * 
 * My initial solution was O(N ^ 3) because I was trying to find triplet first
 * but after reading the paper made by Project Euler I was able to reduce it to O(N ^ 2)
 * they also provided a better solution at O(Sqrt(N)) but I didn't implement it
 */
const LIMIT = 1000

// a^2 + b^2 = c^2
const isTriplet = (first, second, third) => Math.pow(first, 2) + Math.pow(second, 2) === Math.pow(third, 2)

const solution = limit => {
  for (let a = 1; a < limit; a++) {
    for (let b = a + 1; b < limit; b++) {
      // limit = 1000
      // a + b + c = limit
      // a + b + c - limit = 0
      // a + b - limit = -c
      c = (a + b - limit) * -1

      if (c > 0 && isTriplet(a, b, c)) {
        return a * b * c
      }
    }
  }
}

const now = Date.now()
const answer = solution(LIMIT)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)