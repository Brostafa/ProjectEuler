/**
 * @problem_num
 * Problem 10
 * 
 * @title
 * Summation of primes
 * 
 * @desc
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 * @problem
 * Find the sum of all the primes below two million.
 * 
 * @link
 * https://projecteuler.net/problem=10
 */

const MAX_PRIME = 2 * 1000 * 1000 // 2 mil

const isPrime = num => {
  if (num === 2) return true
  if (num % 2 === 0) return false

  // primes are only odd numbers
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false 
  }

  return true
}

const solution = max => {
  let sum = 0

  for (let i = 2; i < max; i++) {
    sum += isPrime(i) ? i : 0
  }

  return sum
}

const now = Date.now()
const answer = solution(MAX_PRIME)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)