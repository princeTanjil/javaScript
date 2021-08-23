
// compair two object

var obj1={
    a: 10,
    b: 20
}
var obj2={
    a: 10,
    b: 20
}
//Memory location compair 
console.log(obj1==obj2)

//property compair korte gele age object k string banate hobe pore compair hobe

console.log(JSON.stringify(obj1)==JSON.stringify(obj2))