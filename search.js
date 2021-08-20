




var arr=[2,34,54,71,8,55,7,83,]
var num=34
var isFind=false

for(var i=0;i<arr.length;i++){
    if(arr[i]==num){
        console.log('Data is found at position index ' + i)
        isFind= true
        break
    }
}
if (!isFind){
    console.log('Data is not found')
}