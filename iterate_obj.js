// akta properties ki object er maje ase kina ata test kora

var obj={
    a: 30,
    b:40,
    c: 50
}
console.log('a'in obj)
console.log('v' in obj)

// for in loop object k travers korar jonno

for(var i in obj){
    console.log(i)

console.log(i + ' : ' + obj[i])
    
}