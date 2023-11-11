function findSolution(N, K, M) {
	let result = 0
    let numberOfK = 0
    let numberOfM = 0
    let amountOfRemainsN = 0
    let amountOfRemainsK = 0
    
    if (K >= M) {
    	
        while (N >= K) {
        numberOfK = Math.floor(N / K)
        amountOfRemainsN = N % K
        numberOfM = Math.floor(K / M) * numberOfK
        result += numberOfM
        amountOfRemainsK = (K % M) * numberOfK
        N = amountOfRemainsK + amountOfRemainsN
        }
        
    }
    return result
}

findSolution(13, 5, 3)

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const [N, K, M] = fileContent.toString().split(" ").map(input => {
	return parseInt(input);
});
const result = findSolution(N, K, M);

fs.writeFileSync("output.txt", result.toString());