function findSolution(a, b, n, m) {
	let min1 = a * (n - 1) + n
    let max1 = a * (n + 1) + n
    let min2 = b * (m - 1) + m
    let max2 = b * (m + 1) + m
    
    if (max1 < min2 || max2 < min1) {
    	return '-1'
    }
    
    let result = [min1, max1, min2, max2]
    result.sort((a, b) => {
    	return a - b
    })
    
    return result[1] + ' ' + result[2]
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")

const [a, b, n, m] = fileContent.toString().split("\n").map(input => {
	return parseInt(input)
});

const result = findSolution(a, b, n, m)

fs.writeFileSync("output.txt", result.toString())