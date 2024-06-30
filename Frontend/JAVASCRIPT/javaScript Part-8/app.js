// let arr = [1,2,3,4,5,6,7]
// let yes = arr.reduce((res,el) => res + el)
// console.log(yes/arr.length)

// let arr = [1,2,3,4,5,6,7];
// console.log(arr.map((num) => num+5));

// let arr1  = ["abc", "hjg", "lof"];
// console.log(arr1.map((a) => a.toUpperCase()));

// const ww = (arr,...arg) => [
//     ...arr,
//     ...arg.map((a) => a*2)
// ]

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
mergeObjects({a:1,b:2,c:3},{a:1,b:2,c:3});