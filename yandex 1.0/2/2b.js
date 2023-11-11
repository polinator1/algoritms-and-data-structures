function findSolution(list) {
    let constant = ascending = weaklyAscending = descending = weaklyDescending = true
    let num = list[0]
    
    for (let i = 1; i < list.length; i++) {
    	
        if (list[i] == -2000000000) {
        	break
        }
        
        if (list[i] != num) {
        	constant = false
        }
        
        if (list[i] > num) {
        	descending = false
            weaklyDescending = false
        }
        
        if (list[i] >= num) {
        	descending = false
        }
        
        if (list[i] < num) {
        	ascending = false
            weaklyAscending = false
        }
        
        if (list[i] <= num) {
        	ascending = false
        }
        
        num = list[i]
    }
    
    if (constant) return 'CONSTANT'
    else if (descending) return 'DESCENDING'
    else if (weaklyDescending) return 'WEAKLY DESCENDING'
    else if (ascending) return 'ASCENDING'
    else if (weaklyAscending) return 'WEAKLY ASCENDING'
    else return 'RANDOM'
    
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const list = fileContent.toString().split("\n").map(input => {
	return parseInt(input);
});

const result = findSolution(list);

fs.writeFileSync("output.txt", result.toString());