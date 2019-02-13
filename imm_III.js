function range(from, to) {
	let delta = to-from > 0 ? to-from : 0; 
	return [...Array(delta)].map((x, y) => y+from);
}

// By design, the left and right offsets are inclusive and exclusive correspondingly 
range(0, 0) // []
range(0, 1) // [0]
range(0, 2) // [0, 1]
range(0, 3) // [0, 1, 2]

range(1, 0) // [] -- edge case, arguments make no sense
range(1, 1) // []
range(1, 2) // [1]
range(1, 3) // [1, 2]