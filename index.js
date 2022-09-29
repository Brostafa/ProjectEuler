/**
 * @problem_num
 * Problem 5
 * 
 * @title
 * Smallest multiple
 * 
 * @desc
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * @problem
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * 
 * @link
 * https://projecteuler.net/problem=5
 */

/**
 * @notes
 * -- This solution will take 15 seconds to compute --
 * 
 * Things I learned from this challenge:
 * - All non-prime positive numbers can be derived from primes by using Prime Factorization
 * - We can "encode" information of numbers by multiplying for instance 2 * 3 * 5 makes 30 which is divisible by 2, 3 and 5.
 * - Primes are like cool friends which is why they are hard to compute...err I mean to find.
 * 
 * @solution
 * For Range [1-10]
 * 
 * 2520 = 210 * 2 * 2 * 3
 * 
 * 210 = 2 * 3 * 5 * 7 (all primes in range of 1-10)
 * 
 * the solution is
 * S = P * M
 * 
 * S = Smallest Positive Number    (we NEED this information)
 * P = all prime numbers in range  (we have this information)
 * M = "Missing" primes            (we NEED this information)
 * 
 * A way to find M is by brute forcing all possible solution which is what I will be doing.
 * 
 * @challenge
 * The challenge is finding the smallest M combination.
 * 
 */

const RANGE = [1, 20]

const isPrime = n => {
  if (n === 2) return true

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

const getPrimes = maxN => {
  let primes = []

  for (let i = 2; i <= maxN; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes
}

const isDivisor = (num, divisor) => num % divisor !== 0

const getNonDivisibles = (num, range) => {
  const [ start, end ] = range
  let nonDivisors = []

  for (let i = start; i <= end; i++) {
    if (isDivisor(num, i)) {
      nonDivisors.push(i)
    }
  }

  return nonDivisors
}

const getPrimeFactors = (num) => {
  // we use object instead of array because we want unique primes only
  let primeTable = {}
  // make a copy of number as we will be dividing it
  let numCopy = num
  
  const helper = () => {
    for (let i = 2; i < num; i++) {
      // if divisble by prime then add it to the table
      // we ensure that we will be picking prime because it comes first in the array
      if (numCopy % i === 0) {
        primeTable[i] = true
        numCopy /= i
        return helper()
      }

      if (numCopy === 1) {
        return
      }
    }
  }

  helper()
  return Object.keys(primeTable).map(Number)
}

const getMaxPossibleValue = (startNumber, endNumber) => Array(endNumber - startNumber)
  .fill()
  .map((_, index) => index + startNumber)
  .reduce((total, n) => total *= n, 1)

const solution = range => {
  const [startNumber, endNumber] = range
  const maxPossibleValue = getMaxPossibleValue(startNumber, endNumber)

  const primes = getPrimes(endNumber)
    .filter(prime => prime >= startNumber)

  // Multiple all primes within range
  const baseNumber = primes
    .reduce((total, prime) => total *= prime, 1)

  const leftOvers = getNonDivisibles(baseNumber, range)
  
  // If all were divisible then just return the baseNumber
  if (!leftOvers.length) {
    return baseNumber
  }

  // primeFactors would have the "missing" piece of information
  // to find the least smallest divisible integer 
  let primeFactors = leftOvers
    .map(getPrimeFactors)
    .flat()

  // get unique values
  primeFactors = [...new Set(primeFactors)]
  let leastPositive = Infinity
  let count = 0
  
  const bruteForcePrimes = (num) => {
    for (const prime of primeFactors) {
      const product = num * prime
      const hasLeftOver = getNonDivisibles(product, range).length
      count++

      // We found a match
      if (!hasLeftOver) {
        leastPositive = Math.min(product, leastPositive)
        return
      } else if (product > maxPossibleValue) {
        return
      }

      bruteForcePrimes(product)
    }
  }

  bruteForcePrimes(baseNumber)
  
  return leastPositive
}

console.log('Started. Will take about 15 - 30 seconds to compute')

const now = Date.now()
const answer = solution(RANGE)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)