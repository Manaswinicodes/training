//Create a new array by transforming each element in an existing array using the `map()` method.
let arr=[1,2,3,4,5];
arr.map((ele,index,arr)=>(
console.log(ele,index,arr)
))

//Output:- 
//arr,         index,           array
// 1            0       [ 1, 2, 3, 4, 5 ]
// 2            1       [ 1, 2, 3, 4, 5 ]
// 3            2       [ 1, 2, 3, 4, 5 ]
// 4            3       [ 1, 2, 3, 4, 5 ]
// 5            4       [ 1, 2, 3, 4, 5 ]
