function findSolution(data) {
	let rows = parseInt(data[0].trim())
    let dict = []
    
    for (let i = 1; i <= rows; i++) {
    	let [a, b] = data[i].split(' ').map(input => input.toString().trim())
        dict[a] = b
        dict[b] = a
    }
    let find = data[data.length - 1].trim()	
	return dict[find] ? dict[find] : ''
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")

const data = fileContent.toString().trim().split("\n")

const result = findSolution(data)

fs.writeFileSync("output.txt", result.toString())