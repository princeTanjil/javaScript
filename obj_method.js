

var obj ={
    a:30,
    b:70,
    c:50
}

// object er key dekte

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
//chlone a object

var obj2= Object.assign({},obj)
console.log(obj2)