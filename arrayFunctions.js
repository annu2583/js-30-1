// let arr=[10,20,30,"a","b","c",true,false]
// console.log(arr[7]);

/***
 * 1. ARRAY IS COLLETION OF ITEMS UNDER SINGLE VARIABLE
 * it's index start from 0 and last index is length of array -1
 * length is no of items in array
 * 
 * 
 */

// let arr2=[91,20,30,50,61,21,33,25]
// let arr2=["sakshi","amit","sunil","sunny","balljeet","anu"]

// console.log(arr2.some((item)=>item%2===0))

// console.log(arr2.copyWithin(1,3,4))

// console.log(arr2.entries(7));

// console.log(arr.concat(arr2));

// console.log(arr.length);
// console.log(arr.at(-2));
// console.log(arr[-2]); 


// for(i=0;i<arr2.length;i++){
//     console.log(arr2[i]);
// }

// arr2.map((index,item)=>{
//     // console.log(index,item);
//     if(index%2===0){
//         console.log("even num");
//     }
//     else{
//         console.log("odd num");
//     }
// })

// let data=arr2.map((item)=>item%2===0)
// let data=arr2.filter((item)=>
// {
//     if(item%2===0){
//         return item
//     }

// }
// )
// console.log(data);


// let arr=[4,67,90,46,56,"ayaan","kajal","floor"];
// for(i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    // }
    // console.log(arr.length);
    // console.log(arr[3]);
    // console.log(arr.concat(arr2));
    
    // console.log(arr.entries(5));
// // console.log(arr.copyWithin(2,5,6));
// arr.map((item,index)=>{
//     console.log(item,index);
//     if (item%2===0) {
//         console.log("even no.");
//     }
//     else{
//         console.log("odd no.");
//     }
// })

// let data=arr.map((item)=>item%2===0)
// let data=arr.some((item)=>
// {
//     if (item%2===0) {
    //         return item
//     }

// })

// console.log(data);

// let arr=[15,30,105,56,78,99,45,67,34,756]
// console.log(arr);
// arr.map((item)=>{
//     console.log(item);
//     if (item%2==0) {
//     console.log("This is a even number");
//   }
//    else{
//    console.log("This is a odd number");
//   }
// })

// let result=arr.findIndex((item)=>item%2===0)
// console.log(result);
// console.log(arr.fill("Sakshi",7,8));

// let data="hi sakshi"
// console.log(Array.from(data));

// console.log(arr.includes("Sakshi"));

// console.log(Array.isArray(arr));

// let arr2=arr.join('-')
// console.log(arr2);

// let keys=arr.keys()
// for(key of keys){
//     console.log(key);
// }


// arr.push("Sakshi")
// console.log(arr);
// console.log(arr.pop());
// console.log(arr,"2nd");
// arr.unshift("Sakshi")
// console.log(arr);
// console.log(arr.shift());
// console.log(arr,"2nd");

/**
 *  push used to insert an element at last of array
 * unshift same as push but add element at start index of array
 * 
 * pop used to remove element from lat position
 * shift same as pop but remove from 1st position
 * 
 * 
 */


// const array1 = [1, 2, 3, 4];

// let data=array1.reduce((acc,currentValue)=> acc+currentValue)
// console.log(data);

// const array2 = [2, 12, 8, 130, 44,"script"];

// const found = array2.find((element) => element%5===0);
// const result= array2.findLastIndex((element)=> element<50)
// console.log(array2.includes("script"));
// console.log(array2.join("/"));
// console.log(array2);

// const plants =['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.push('potato'));
// console.log(plants.pop('potato'));
// console.log(plants.unshift('potato'));
// console.log(plants.shift('potato'));
// console.log(plants.lastIndexOf)('tomato');
// const reverse=plants.reverse();

// const shift=plants.shift();
// console.log(plants);                                                                                                                                                                                                                 

// const arr3=[2,4,5,6,8,9];
// let data=arr3.reduce((acc,currentValue)=>acc+currentValue)
// console.log(data);

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const ans =words.filter((word)=>word.length<6);
// console.log(ans);



// let arr=[]

// function showData(){
//     if(arr.length<5){
//         let num= prompt("Enter number")
//         arr.push(num)
//         console.log(arr,"array 1st time");
//         showData()
//     }
//     else{
//         console.log(arr,"array is");
//         arr.map((item,index)=>{
//             console.log(item);
//         })
    
//     }

// }

// showData()

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// console.log(words.splice(2,2,"Sakshi"));
// console.log(words);

// console.log(words.slice(2));
// console.log(words.slice(2,4));
// console.log(words);

let arr=[1,100,2,400,3,6,56]

console.log(arr.sort());