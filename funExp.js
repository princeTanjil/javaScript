// function expression and anomomus function

var addition= function (a,b){
    return a+b
}
var another = addition;
console.log(another)
console.log(another(2,4))