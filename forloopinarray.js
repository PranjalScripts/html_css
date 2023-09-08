/**let array = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,99,0];
for(var i =0;i<array.length;i++ ){
    console.log("hello");
}**/



let array = [];

let arraySize =+prompt("enter the size of array");
 

const array1 = [];
var i=0;
while(i<arraySize){
    array1.push(+prompt("enter  the elements of array"));
    i++;
}

console.log("array is " , array1);