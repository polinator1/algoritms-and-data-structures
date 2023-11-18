function findSolution(words) {
	let wordsSet = new Set()
    for (let i = 0; i < words.length; i++) {
    	if (words[i].length) {
        	wordsSet.add(words[i])
        }
    }
    return wordsSet.size
}



const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let words = fileContent.toString().replace(/\r/gi, ' ').replace(/\n/gi, ' ').split(" ")

const result = findSolution(words)

fs.writeFileSync("output.txt", result.toString())