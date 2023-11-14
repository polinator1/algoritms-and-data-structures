function findSolution(list) {
	let counter = 0
    
    for (let i = 1; i < list.length; i++) {
    	if (list[i] > list[i - 1] && list[i] > list[i + 1]) {
        counter++
        }
    }
    return counter
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")

const list = fileContent.toString().split(" ").map(input => {
	return parseFloat(input)
})

const result = findSolution(list)

fs.writeFileSync("output.txt", result.toString())