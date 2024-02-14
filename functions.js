// naming function


function handleClick() {
    console.log("here this fuction is invoked");
}
handleClick()

// function with parameter
// function sum(x, y) {
//     let c= Number(x) + Number(y);
//     console.log("sum of 2 no. is", c)
// }
// sum(10,20)


// let a= prompt("Enter the 1st number")
// let b= prompt("Enter the 2nd number")
//    sum(a,b)

// function with return

// function cal(x, y){
//     return x*y
// }
// let c = cal(10,20)
// console.log(c)

// function sum(d,f) {
//     let c=Number(d)+Number(f)
//     return c;
   
// }
// function multiply(d,f) {
//     let c=d*f
//     return c;
// }


// function subtraction(d,f) {
//     let c=d-f
//     return c;
// }


// function cal(x,z){
//     return x%z
// }


// let x=prompt("enter the 1st value")
// let y=prompt("enter the  2nd value")
// let z=prompt("enter the operator")
// if(z==="+"){
//    console.log(sum(x,y),"sum")
// }
// else if(z==="-"){
//    console.log(subtraction(x,y),"sumb")
// }
// else if(z==="*"){
//    console.log(multiply(x,y),"multiply")
// }
// else if(z==="%"){
//    console.log(cal(x,y),"reminder")
// }
// else{
//     console.log("enter correct operatro");
// }




// let a= prompt("Enter the 1st number")
// let b= prompt("Enter the 2nd number")
//    square(a,b)

 function findsquare(numb) {
   return numb*numb
 }
 console.log(findsquare(6));
 console.log(findsquare(98));
 console.log(findsquare(46));
 console.log(findsquare(23));


 function recarea(a,b) {
    return a*b
 }
 console.log("The area of rectangle is",recarea(40,60));
 console.log("The area of rectangle is",recarea(30,60));
 console.log("The area of rectangle is",recarea(40,20));
 

 
function CheckEven(n){
  return n%2==0;
}
console.log(CheckEven(45));
console.log(CheckEven(89));
console.log(CheckEven(90));

