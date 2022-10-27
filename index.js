/**
 * @problem_num
 * Problem 14
 * 
 * @title
 * Longest Collatz sequence
 * 
 * @desc
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * 
 * Using the rule above and starting with 13, we generate the following sequence:
 * 
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * 
 * @problem
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 * 
 * @link
 * https://projecteuler.net/problem=14
 */

/**
 * @NOTE
 * index.js: use memory to reduce amount of computation needed (FASTER but uses more memory). Can compute uptill 1e7 before it runs out of memory
 * index-cpu.js: uses CONSTANT memory (slower but constant/small memory footprint). Can compute almost any arbitrary MAX_NUM
 * 
 * index.js is faster by 2-3X than index-simple.js
 */

const isEven = n => n % 2 === 0
// If you will any value bigger than 1e7 then use index.simple.js as this script will run out of memory
// due to so a really big cache size.
const MAX_NUM = 1e6 // million
// Create cache to store all already-done computations
let CACHE = {}

const getChainLength = startingNum => {
  if (typeof CACHE[startingNum] !== 'undefined') {
    return CACHE[startingNum]
  }

  let currentNum = startingNum
  let chainLen = 1
  let currentNums = []

  while (currentNum !== 1) {
    // If we have that result pre-calculated then use the cache
    if (CACHE[currentNum]) {
      chainLen += CACHE[currentNum]

      break
    }
    
    if (isEven(currentNum)) {
      currentNum /= 2
    } else {
      currentNum = (3 * currentNum) + 1
    }

    currentNums.push(currentNum)
    chainLen++
  }

  // We can use index to figure out chain length for that num
  currentNums.forEach((num, index) => {
    const chainLenForN = currentNums.length - index

    CACHE[num] = chainLenForN
  })

  CACHE[startingNum] = chainLen
  
  return chainLen
}

const solution = maxNum => {
  let longestChain = 0
  let longestNum = 0

  for (let i = 1; i <= maxNum; i++) {
    const currentChainLen = getChainLength(i)
    longestChain = Math.max(longestChain, currentChainLen)

    if (currentChainLen === longestChain) {
      longestNum = i
    }
  }

  return longestNum
}

const now = Date.now()
const answer = solution(MAX_NUM)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)