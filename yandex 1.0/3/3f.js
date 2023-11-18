function findSolution(data) {
    let setA = [...data[0].trim()];
    let setB = [...data[1].trim()];
    let contrastSet = new Set();
    let similarities = 0;
    
    for (let i = 1; i < setB.length; i++) {
        contrastSet.add(setB[i - 1] + setB[i]);
    }
    
    for (let i = 1; i < setA.length; i++) {
    	if (contrastSet.has(setA[i - 1] + setA[i])) {
        	similarities++;
        }
    }
    
    return similarities;
    
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let data = fileContent.toString().split("\n")

const result = findSolution(data)

fs.writeFileSync("output.txt", result.toString())