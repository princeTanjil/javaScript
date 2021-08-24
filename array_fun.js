// add array element using for loop

var arr1=[2,4,6]
var arr2=[4,5,7]
var arr3=[6,8,9]
var sum=0;
for(var i=0;i<arr1.length;i++){
    sum+=arr1[i]
}
console.log(sum)

var sum2=0
for(var i=0;i<arr2.length;i++){
    sum2+=arr2[i]
}
console.log(sum2)

var sum3=0
for(var i=0;i<arr3.length;i++){
    sum3+=arr3[i]
}
console.log(sum3)

//This is done by function

function sumOfArray(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)