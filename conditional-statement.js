// if-else

// let country=prompt("Enter country name")

// /**simple if */

// if(country==="India"){
//         console.log("you are an indian");
//     }

    
    /**if-else */
    // let marks=prompt("Enter marks")

// if(marks>=33){
// console.log("you are pass");
// }
// else{
// console.log("you are fail");
// }

/** nested-if */

// let classs=prompt("enter class name")
// let marks=prompt("Enter marks")


// if(classs=="12"){

//     if(marks>=50){
//         console.log("pass");
//     }
//     else{
//         console.log("fail");
//     }

// }
// else{
//     console.log("not exist");
// }

/** ladder if */

// marks=10

// if(marks>90){
//     console.log("grade A");
// }
// else if(marks>70){
//     console.log("grade B");
// }
// else if(marks>40){
//     console.log("grade c");
// }
// else{
//     console.log("Fail");
// }




/***
 * 1. take 2 values from propmt like a or b
 * 2. teake operator from prompt like  '+,-,*,/,%'
 * 3. make conditions according to operator
 * 
 * 
 */


// let a=prompt("Enter values a")
// let b=prompt("Enter values b")  
// let operator=prompt("Enter any operator '+,-,*,/,%'")  

 
// if(operator=='+'){
//     console.log("The sum of no is",Number(a)+Number(b));
 
// }
// else if(operator=='-'){
//     console.log("The subtraction of no is",a-b);

// }
// else if(operator=='*'){
//     console.log("The multipication of no is",a*b);
// }
// else if(operator=='%'){
//     console.log("The remindex of no is",a%b);
// }
// else if(operator=='^'){
//     console.log("The multipication of no is",a^b);
// }
// else if(operator=='/'){
//     console.log("The divide of no is",a/b);
// }
// else{
//     console.log("write correct  operator");
// }      

// let b=prompt("Enter values b")

// if(a=="%")
// {
//     console.log("modulus");
// }
// else{
//     console.log("not correct");
// }



// switch (operator) {
//     case '+': console.log(a+b)
//                  break;
//     case '-': console.log(a-b)
//                  break;
//     case '*': console.log(a*b)
//                 //  break;
//     case '/': console.log(a/b)
//                  break;
//     case '%': console.log(a%b)
//                  break;
//     case '^': console.log(a^b)
//                  break;
//     default:   console.log("enter correct operator");
//         break;
// }



// 1. find percentage then print grades


// let a=prompt("Enter the Value a")
// let b=prompt("Enter the Value b")
// let c=((Number(b)+Number(a))/200)*100
//    console.log(c,"%");     

// if (c>=95) {              
//     console.log("Grade A++");
// }
// else if (c>=80) {            
//     console.log("Grade A");
// }
// else if (c>=60) {
//     console.log("Grade B");
// }
// else if (c>=50) {
//     console.log("Grade C");
// }
// else if (c>30) {
//     console.log("Grade D");
// }
// else{
//     console.log("fail");
// }

// switch (true) {
//     case c>=95:
//         console.log("Grade A++");
//         break;
//     case c>80:            
//         console.log("Grade A");
//         break;
//     case c>=60:
//         console.log("Grade B");
//         break;
//     case c>=50:
//         console.log("Grade C");
//     case c>=30:
//         console.log("Grade D");
//          break;
//     default: console.log("Fail");
//         break;
// }

let age=prompt("Enter age")
 let country=prompt("Enter Country")
 if (country=="India"){
    if (age>=18){
        console.log("You are  eligible");
    }
    else{
        console.log("You are not eligible");
    }

 }
 else{
    console.log("You are from other country" );
}

/** no is even or odd
 * no is negative or positive or zero
 * given vallue is number or not
 * largest of two number
 * smallest of three number
 * vowel or consonants
 */