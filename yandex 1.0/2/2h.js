function findSolution(list) {
	
    let a = b = Infinity
    let d = e = f = -Infinity
    let res = []
    for (let i = 0; i < list.length; i++) {
    	
        if (list[i] < a) {
            b = a
            a = list[i]
        } else if (list[i] < b) {
            b = list[i]
        }
        
        if (list[i] > d) {
        	f = e
            e = d
            d = list[i]
        } else if (list[i] > e) {
        	f = e
            e = list[i]
        } else if (list[i] > f) {
        	f = list[i]
        }
    }
    if (a * b * d > d * e * f) {
    	res.push(a, b, d)
    } else {
    	res.push(d, e, f)
    }
    return res
}


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
const list = fileContent.toString().trim().split(" ").map(input => {
	return parseInt(input)
})

const result = findSolution(list)

fs.writeFileSync("output.txt", result.join(' '))