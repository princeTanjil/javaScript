// the function that return something

function sumAll(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum

    
}
var result = sumAll(1,2,3)
console.log(result)

//object return o kora jete pare

function person( name, email){
    return{
        name : name,
        email : email
    }
}
 var p1= person( 'prince tanjil' , 'prince@gmail.com ') 
 console.log(p1)