// const array =[1,2,3];
// const  array2 = [];
// const  array3 = [];
// const  array1 = [];
//  array1.push(array[0]);
//  array2.push(array[1]);
//  array3.push(array[2]);
// console.log(array1);
// console.log(array2);
// console.log(array3);
 
const arr = [1,2,3,4,5];
const arr1=[];
arr1.push(arr.slice(0,2));
for(let i=3;i>=0;i--){
arr1.push(arr[i]);}
console.log(arr1);




