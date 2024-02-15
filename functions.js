// naming function


function handleClick() {
    console.log("here this fuction is invoked");
}

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
  console.log(numb*numb);
  //  return numb*numb
 }
//  console.log(findsquare(6));
//  console.log(findsquare(98));
//  console.log(findsquare(46));
//  console.log(findsquare(23));


 function recarea(a,b) {
  console.log(a*b);

    // return a*b
 }
//  console.log("The area of rectangle is",recarea(40,60));
//  console.log("The area of rectangle is",recarea(30,60));
//  console.log("The area of rectangle is",recarea(40,20));
 

//  let n= prompt("Enter number")
 
// function CheckEven(n){
//   // return 
//    if(n%2==0){
//     console.log("Even no"); 
//    }
//    else{
//     console.log("odd no"); 
//    }
// }

// console.log(CheckEven(89));
// console.log(CheckEven(90));


// function hello(){
//   console.log("hello");

//   function hi(){
//     console.log("hi");
//   }

//   function bye(){
//     console.log("bye");
//     hi()
//   }
// bye()
// }

// function hey(){
//   console.log("hey") ;
//   hello()
// }

// hey()

/** anonymous */
// const name=function(){
//   console.log("my name is sakshi");
// }

// name()

/** arrow function */

const checkData=()=>{
  console.log("hey");
}
// checkData()


/** self calling function */

(()=>{

  console.log("hi i  am here self called");

})()


// types of function and its benefit


function hello() {
  console.log("hello");

  function me() {
    console.log("me");
  }

}
// hello()

// const name=function(){
//   console.log("Here I am");
// }
// name()

// const classroom=()=>{
//    console.log("us");
// }
// classroom()


(()=>{
  console.log("This is a self calling");
}
)()