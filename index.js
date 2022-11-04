/**
 * @problem_num
 * Problem 18
 * 
 * @title
 * Maximum path sum I
 * 
 * @desc
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below,
 * the maximum total from top to bottom is 23.
 * 
 *    3
 *   7 4
 *  2 4 6
 * 8 5 9 3
 * 
 * That is, 3 + 7 + 4 + 9 = 23.
 * 
 * @problem
 * Find the maximum total from top to bottom of the triangle below: TRIANGLE
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route.
 * However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
 * 
 * @link
 * https://projecteuler.net/problem=18
 */

// Putting my thoughts as comments
// I thought of implementing a brute force method but for a 15 rows (in the example) this will take 2 ^ 14 which is 16384
// and that's fine to compute but per the NOTE in @problem I think it would be naive solution  [Update: My opinion changed]
// because we would end up with a time complexity of 2 ^ N. So if N is 100 it will be really difficult to compute.

// This problem reminded me of Shortest Path Problem where we could use an algorthim like Dijkstra
// But I am lazy to learn that so I am going to implement brute force.

const TRIANGLE = `
                         75
                        95 64
                      17 47 82
                     18 35 87 10
                   20 04 82 47 65
                 19 01 23 75 03 34
                88 02 77 73 07 63 67
              99 65 04 28 06 16 70 92
            41 41 26 56 83 40 80 70 33
          41 48 72 33 47 32 37 16 94 29
        53 71 44 65 25 43 91 52 97 51 14
      70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
  63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`
const SMOL_TRIANGLE = `
   3
  7 4
 2 4 6
8 5 9 3
`

const triangleToArray = triangleStr => {
  return triangleStr
    .trim()
    .split('\n')
    .map(row => {
      const numbers = row.
        trim()
        .split(' ')
        // filter any extra space
        .filter(n => n !== '')
        // convert to number
        .map(Number)

      return numbers
    })
}

const generateAllPaths = arrays => {
  const paths = []

  const genPaths = (path, index, maxIVal) => {
    if (index + 1 === arrays.length) {
      paths.push(path)
      return
    }

    const leftNum = arrays[index + 1][maxIVal]
    const rightNum = arrays[index + 1][maxIVal + 1]
    const leftPath = path.concat([leftNum])
    const rightPath = path.concat([rightNum])
    
    genPaths(leftPath, index + 1, maxIVal)
    genPaths(rightPath, index + 1, maxIVal + 1)
  }

  genPaths(arrays[0], 0, 0)

  return paths
}

const solution = triangleStr => {
  const arrays = triangleToArray(triangleStr)
  const allPaths = generateAllPaths(arrays)
  let maxSum = 0

  allPaths.forEach(path => {
    const sum = path.reduce((sum, n) => sum + n, 0)

    maxSum = Math.max(sum, maxSum)
  })

  return maxSum
}

const now = Date.now()
const answer = solution(TRIANGLE)

console.log(`Execution Time: ${Date.now() - now}ms\nAnswer: ${answer}`)