function findSolution(data) {
	let num = parseInt(data[0].trim())
    let allLangs = new Set()
    let position = 1
    let studentCounter = 1
    let langArr = []
    
    while (studentCounter <= num) {
    	let langsCounter = parseInt(data[position].trim())
        position++
        studentCounter += 1
        
        for (let i = position; i < position + langsCounter; i++) {
        	let lang = data[i].trim()
            allLangs.add(lang)
            if (!langArr[lang]) {
            	langArr[lang] = 1
            } else {
            	langArr[lang]++
            }
        }
        position += langsCounter
    }
    
    let result = ''
	let knowAll = 0
	for (let item in langArr) {
		if (langArr[item] == num) {
			knowAll++
			result += item + "\n"
		}
	}
	result = knowAll + "\n" + result.trim() + "\n"

	result += allLangs.size + "\n"
	for (item of allLangs) {
		result += item + "\n"
	}
	return result
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let data = fileContent.toString().split("\n");

const result = findSolution(data);

fs.writeFileSync("output.txt", result.toString());