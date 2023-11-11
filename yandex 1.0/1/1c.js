function findNumbers(existingNumbers, d) {
	let cleanNumber = number => {
    	if (number.length > 7) {
        	if (number.substring(1, 4) == '495') {
            	number = number.substring(number.length - 7, number.length)
            }
            number = number.substring(number.length - 9, number.length)
        }
        return number
    }
    
    let res = []
    existingNumbers.forEach(existingNumbers => {
    	if (cleanNumber(existingNumbers) == cleanNumber(d)) {
        	res.push('YES')
        } else {
        	res.push('NO')
        }
    })
    return res
}


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")

const [a, b, c, d] = fileContent.toString().split("\n").map(input => {
	return input.replace(/[^\d]/g, '')
});
const result = findNumbers([b, c, d], a).join("\n")
fs.writeFileSync("output.txt", result)