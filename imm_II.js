//1. assoc

function assoc(k, v, obj) {
	return{...obj,[k]: v};
}

assoc("b", "B", {a: "A"})  // {a: "A", b: "B"}
assoc("b", "B+", {b: "B"}) // {b: "B+"}

//2. dissoc

function dissoc(k, obj) { 
	var temp = {...obj};
	delete temp[k];
	return temp;
}

dissoc("a", {a: "A"})         // {}
dissoc("b", {a: "A"})         // {a: "A"}
dissoc("b", {a: "A", b: "B"}) // {a: "A"}

// 3. merge

function merge(obj1, obj2) { 
	return {...obj1, ...obj2};
}

console.log(merge({}, {x: "x"}))        // {x: "x"}
console.log(merge({x: "x"}, {}))        // {x: "x"}
console.log(merge({x: "x"}, {y: "y"}))  // {x: "x", y: "y"}
console.log(merge({x: "x"}, {x: "x+"})) // {x: "x+"}
