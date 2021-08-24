// function er argument

function test(a,b,c){

    console.log(arguments)

}
test(20,30,40)

//peramitter na bole dile o arguments provide kora jay

function test(){

    console.log(arguments)

}
test(20,30,40)

//argument guli dekhar jonno

function test(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
test(3,5,7,8)

//paramitter na set kore j kuno sonkhok number ar sum ber kora possible

function testy(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}
testy(1,2,3,4,5,6,7,8,9,10)