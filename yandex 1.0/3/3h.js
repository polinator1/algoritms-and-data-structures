function findSolution(data) {
	let length = parseInt(data[0].trim());
	let setX = new Set();
    let counter = 0;
	for (let i = 1; i <= length; i++) {
		let x = data[i][0].trim().split(' ').map(input => parseInt(input));
        let y = data[i][1].trim().split(' ').map(input => parseInt(input));
        setX.add([x, y]);
    }
    
    
    for (let i = 0; i < setX.size; i++) {
    	if (x[i] == x[i + 1] && y[i] > y [y + 1]) {
                setX.delete([x[i + 1], y[i + 1]]);
                setX.delete([x[i], y[i]]);
                counter++;
            } else {
            	setX.delete([x[i], y[i]]);
                counter++;
            }
    }
    
    return counter;
    
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let data = fileContent.toString().split("\n");

const result = findSolution(data);

fs.writeFileSync("output.txt", result.toString());