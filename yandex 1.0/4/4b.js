function findSolution(data) {
	let words = data.toString().trim().split(/\s+/).map(input => input.toString()).filter(input => input != '')
    let wordsArr = []
    let numbersArr = []
    for (let i = 0; i < words.length; i++) {
    	wordsArr[words[i]] = 0
    }
    for (let i = 0; i < words.length; i++) {
    	numbersArr.push(wordsArr[words[i]])
        wordsArr[words[i]] += 1
    }
    
    if (numbersArr.length == 0) return ''
    return numbersArr.join(' ')
}


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let data = fileContent.toString()

const result = findSolution(data)

fs.writeFileSync("output.txt", result.toString())