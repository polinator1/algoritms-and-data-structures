function findSolution(list) {
	let res = []
    let length = list.length
    
    for (let l = 0; l < length; l++){
    	let i = l
    	let j = length - 1
        
        while (i < length && j >= 0 && list[i] == list[j] && i <= j) {
        	i++
            j--
        }
        
        if (i > j) {
        	for (let k = l - 1; k > -1; k--) {
            	res.push(list[k])
            }
            return res
        }
    }
    return res
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const data = fileContent.toString().split("\n")
let list = []
if (data[1].toString().trim()) {
	list = data[1].toString().trim().split(" ").map(input => {
		return parseInt(input)
	});
}
const result = findSolution(list)

fs.writeFileSync("output.txt", result.length + "\n" + result.join(' '))