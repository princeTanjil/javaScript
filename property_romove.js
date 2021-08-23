//object property remove

var obj={
    a: 100,
    b: 200,
    c : 300
}
console.log(obj.a)
console.log(obj.b)
//change object value
obj.a=50
obj.c=60
console.log(obj.a)
console.log(obj.b)
// update using array notation 
obj['c']=400
console.log(obj.c)

//remove object property
delete obj.a
console.log(obj)