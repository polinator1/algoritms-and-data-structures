function findSolution(kubA, kubB) {
	let counterInter = 0
    let counterDiffA = 0
    let counterDiffB = 0
    
    let inter = new Set()
    let diffA = new Set()
    let diffB = new Set()
    
    for (let item of kubA) {
    	if (kubB.has(item)) {
        	counterInter++
            inter.add(item)
        } else {
        	counterDiffA++
            diffA.add(item)
        }
    }
    
    for (let item of kubB) {
    	if (kubA.has(item)) {
        	if (!inter.has(item)) {
            	counterInter++
            	inter.add(item)
            }
        } else {
        	counterDiffB++
            diffB.add(item)
        }
    }
    
    inter = [...inter].sort((a, b) => a - b)
    diffA = [...diffA].sort((a, b) => a - b)
    diffB = [...diffB].sort((a, b) => a - b)
    
    return counterInter + '\n' + inter.join(' ') + '\n' + counterDiffA + ' ' + diffA.join(' ') + '\n' + counterDiffB + ' ' + diffB.join(' ')
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8")
let data = fileContent.toString().split("\n")
let [N, M] = data[0].split(' ').map(input => {
	return parseInt(input)
})
let kubA = new Set()
let kubB = new Set()
for (let i = 1; i < N + 1; i++) {
	kubA.add(parseInt(data[i]))
}
for (let i = N + 1; i < N + 1 + M; i++) {
	kubB.add(parseInt(data[i]))
}

const result = findSolution(kubA, kubB)

fs.writeFileSync("output.txt", result)