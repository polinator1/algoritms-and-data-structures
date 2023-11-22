function findSolution(data) {
	let words = data.toString().trim().split(/\s+/).map(input => input.toString()).filter(input => input != '')
    let wordsArr = []
    
    for (let i = 0; i < words.length; i++) {
    	if (wordsArr[words[i]] === undefined) wordsArr[words[i]] = 0;
		wordsArr[words[i]]++;
    }
    
    let max = 0;
	let minWord = false;
	for (let item in wordsArr) {
		if (wordsArr[item] > max) {
			max = wordsArr[item];
		}
	}
	for (i = 0; i < words.length; i++) {
		if (wordsArr[words[i]] == max) {
			if (minWord === false) {
				minWord = words[i]
			} else if (minWord > words[i]) {
				minWord = words[i];
			}
		}
	}
    if (minWord === false) return ''

	return minWord
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let data = fileContent.toString()

const result = findSolution(data)

fs.writeFileSync("output.txt", result.toString())