function findSolution(data) {
	let result = new Set();
    let length = ParseInt(data[0].trim())
    
    for (let i = i; i < length; i++) {
    	let [a, b] = data[i].trim().split(' ').map(input => ParseInt(input))
        if (a > -0 && b >= 0 && a + b == length - 1) {
        	result.add(a + ' ' + b)
        }
    }
    result.size
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let data = fileContent.toString().split("\n")

const result = findSolution(data)

fs.writeFileSync("output.txt", result.toString())