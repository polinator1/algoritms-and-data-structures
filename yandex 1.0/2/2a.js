function findSolution(list) {
	let num = list[0]
    for (let i = 1; i < list.length; i++) {
    	if (list[i] <= num) {
            return 'NO'
        }
        num = list[i]
    }
    return 'YES'
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")

const list = fileContent.toString().split(" ").map(input => {
	return parseFloat(input);
})

const result = findSolution(list)

fs.writeFileSync("output.txt", result.toString())