// 1. append

function append(x, xs) { 
	return [...xs, x];
}

append(4, [])        // [4]
append(4, [1, 2, 3]) // [1, 2, 3, 4]

//2. prepend

function prepend(x, xs) { 
	return [x, ...xs];
}

prepend(0, [])        // [0]
prepend(0, [1, 2, 3]) // [0, 1, 2, 3]

//3. concat

function concat(xs1, xs2) { 
	return [...x, ...xs];
}

concat([], [])      // []
concat([1, 2], [3]) // [1, 2, 3]