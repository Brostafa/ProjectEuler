/**
 * @problem_num
 * Problem 17
 * 
 * @title
 * Number letter counts
 * 
 * @desc
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * 
 * @problem
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 * 
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters
 * and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage.
 * 
 * @link
 * https://projecteuler.net/problem=17
 */

const RANGE = [1, 1000]

// https://www.vocabulary.cl/pictures/numbers-in-english.gif
const NUMBER_MAP = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  1000: 'one thousand'
}

const countStr = str => {
  return str.replace(/ |-/g, '').length
}

const handleTens = num => {
  if (NUMBER_MAP[num]) {
    return NUMBER_MAP[num]
  }

  const tens = Math.floor(num / 10) * 10
  const tenStr = NUMBER_MAP[tens]
  const ones = num % 10
  const oneStr = NUMBER_MAP[ones]

  return `${tenStr}-${oneStr}`
}
const handleHundreds = num => {
  let tenNumStr = ''

  // if not EXACT hundreds (e.g: NOT 100, 200, 300,...etc)
  if (num % 100 !== 0) {
    // 342 
    // take "42" and send it to handleTens
    const tenNums = num % 100
    tenNumStr = 'and ' + handleTens(tenNums)
  }

  // take "3" (hundreds) part from 342
  const hundreds = Math.floor(num / 100)
  const hundredStr = NUMBER_MAP[hundreds]
  
  return `${hundredStr} hundred ${tenNumStr}`
}

const numberToStr = num => {
  if (NUMBER_MAP[num]) {
    return NUMBER_MAP[num]
  }

  if (num <= 99) {
    return handleTens(num).trim()
  } else if (num <= 999) {
    return handleHundreds(num).trim()
  }
}

const solution = ([ start, end ]) => {
  let sum = 0
  
  for (let i = start; i <= end; i ++) {
    const str = numberToStr(i)
    const count = countStr(str)
    sum += count

    // You can uncomment this line for debugging
    // console.log({ num: i, str, count, sum })
  }

  return sum
}

const now = Date.now()
const answer = solution(RANGE)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)