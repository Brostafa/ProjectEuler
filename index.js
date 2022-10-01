/**
 * @problem_num
 * Problem 7
 * 
 * @title
 * 10001st prime
 * 
 * @desc
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * 
 * @problem
 * What is the 10001st prime number?
 * 
 * @link
 * https://projecteuler.net/problem=7
 */

const PRIME_INDEX = 10001

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

const solution = index => {
  let primes = []
  let i = 2

  while (primes.length <= index) {
    if (isPrime(i)) {
      primes.push(i)
    }

    i += i === 2 ? 1 : 2
  }

  return primes[index]
}

const now = Date.now()
const answer = solution(PRIME_INDEX)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)