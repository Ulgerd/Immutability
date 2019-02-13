function deepMerge(o1, o2) {
	var o = {};
	for (var i = 0; i < arguments.length; i++) {
		for (var k in arguments[i]) {
			if (typeof arguments[i] !== "undefined") {
				o[k] = (typeof arguments[i][k] == 'object') ? 
				deepMerge(o[k], arguments[i][k]) : 
				arguments[i][k];
			}
		}
	}
	return o;
}

let o1 = {x: {y: "x.y"}}
let o2 = {x: {z: "x.z"}}

console.log(deepMerge(o1, o2)) // {x: {y: "x.y", z: "x.z"}}
console.log(deepMerge(o2, o1)) // {x: {z: "x.z", y: "x.y"}}

// for comparison
console.log(merge(o1, o2)) // {x: {z: "x.z"}} -- o2 in this case
console.log(merge(o2, o1)) // {x: {y: "x.y"}} -- o1 in this case