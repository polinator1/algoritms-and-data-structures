function sorted(k, l, m, n) {
	let options = [k, l, m, n]
    options.sort((a, b) => {
    	a - b
    })
    let min = m > n ? n : m
    let max = m > n ? m: n
    if (options[3] == max && options[1] <= min) {
    	return true
    }
    return false
}

function findSolution(a, b, c, d, e) {
	if (sorted(a, b, d, e)) return 'YES'
    if (sorted(a, c, d, e)) return 'YES'
    if (sorted(b, c, d, e)) return 'YES'
    
    return 'NO'
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [a, b, c, d, e] = fileContent.toString().split("\n").map(input => {
	return parseInt(input);
});

const result = findSolution(a, b, c, d, e);

fs.writeFileSync("output.txt", result.toString());