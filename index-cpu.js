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

const isEven = n => n % 2 === 0
const MAX_NUM = 1e8 // million

const getChainLength = startingNum => {
  let currentNum = startingNum
  let chainLen = 1

  while (currentNum !== 1) {
    if (isEven(currentNum)) {
      currentNum /= 2
    } else {
      currentNum = (3 * currentNum) + 1
    }

    chainLen++
  }
  
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
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)
