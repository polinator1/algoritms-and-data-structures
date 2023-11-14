function findSolution(list) {
    let c = Infinity, d = c
    let a = -Infinity - 1, b = a
    let res = []
    
    for (let n = 0; n < list.length; n++) {
        if (list[n] >= a){
            b = a
            a = list[n]
        } else if (list[n] >= b) {
            b = list[n]
        }
        if (list[n] <= d) {
            c = d
            d = list[n]
        } else if (list[n] <= c) {
            c = list[n]
        }
    }
    
    if (a * b > c * d) {
    	if (a > b) {
        	res.push(b, a)
        } else {
        	res.push(a, b)
        }
    }
    else {
    	if (c > d) {
        	res.push(d, c)
        } else {
        	res.push(c, d)
        }
    }
    return res
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const list = fileContent.toString().trim().split(" ").map(input => {
	return parseInt(input);
})

const result = findSolution(list)

fs.writeFileSync("output.txt", result.join(' '))