function findSolution(list) {
	let result = new Set()
    let current
    
    for (let i = 0; i < list.length; i++) {
    	current = list[i]
        if (!result.has(list)) {
        	result.add(current)
        }
    }
    
    return result.size
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")

const list = fileContent.toString().trim().split(" ")

const result = findSolution(list)

fs.writeFileSync("output.txt", result.toString())