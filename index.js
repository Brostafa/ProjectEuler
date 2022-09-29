/**
 * @problem_num
 * Problem 3
 * 
 * @title
 * Largest prime factor
 * 
 * @desc
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * @problem
 * What is the largest prime factor of the number 600851475143 ?
 * 
 * @link
 * https://projecteuler.net/problem=3
 */

const NUMBER = 600851475143

// https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-prime-factorization-prealg/v/prime-factorization
const findPrimeFactor = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return i
    }
  }

  return null
}

const solution = (num) => {
  let numCopy = num
  let findNext = true
  let highestPrime = 0

  while (findNext) {
    const prime = findPrimeFactor(numCopy)
    
    if (prime) {
      highestPrime = Math.max(highestPrime, prime)
      numCopy /= prime
    } else {
      highestPrime = Math.max(highestPrime, numCopy)
      findNext = !!prime
    }
  }

  return highestPrime ? highestPrime : null
}

console.log(
  solution(NUMBER)
)