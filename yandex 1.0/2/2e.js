function findSolution(list) {
	let winner = list[0]
    let result = 1
	let position = -1
	let metres = 0
    
    for (let i = 1; i < list.length; i++) {
    	if (list[i - 1] > winner) {
        	winner = list[i - 1]
            position = -1
            metres = 0
        }
        
        if (list[i] % 5 == 0 && list[i] % 2 != 0 && list[i + 1] < list[i] && list[i] > metres) {
        	position = i
            metres = list[i]
        } 
    }
    
    if (list[list.length - 1] > winner || position == -1) return '0'
	for (let i = 0; i < list.length; i++) {
		if (list[i] > list[position]) {
			result++
		}
	}
	return result
}


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const data = fileContent.toString().split("\n")
const list = data[1].split(" ").map(input => {
	return parseInt(input)
})

const result = findSolution(list)

fs.writeFileSync("output.txt", result.toString())