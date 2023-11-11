function findSolution(list, myNumber) {
	let num = list[0]
    
    let getTheDif = (a, b) => {
    	if (a > b) return a - b
        else return b - a
    }
    
    let dif = getTheDif(list[0], myNumber)
    let currentDif = dif
    
    for (let i = 1; i < list.length; i++) {
    	currentDif = getTheDif(list[i], myNumber)
    	if (currentDif < dif) {
        	num = list[i]
            dif = currentDif
        }
    }
    return num
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split("\n");
const list_length = data[0];
const list = data[1].split(" ").map(input => {
	return parseInt(input);
})
const myNumber = data[2];

const result = findSolution(list, myNumber);

fs.writeFileSync("output.txt", result.toString());