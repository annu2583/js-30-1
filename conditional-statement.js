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

// let age=prompt("Enter age")
//  let country=prompt("Enter Country")
//  if (country=="India"){
//     if (age>=18){
//         console.log("You are  eligible");
//     }
//     else{
//         console.log("You are not eligible");
//     }

//  }
//  else{
//     console.log("You are from other country" );
// }

/** no is even or odd
 * no is negative or positive or zero
 * given vallue is number or not
 * largest of two number
 * smallest of three number
 * vowel or consonants
 */
//1. Check even or odd

// let number=prompt("Enter the number");


// if(number%2==0){
//     console.log("The number is even.");
// }
// else{
//     console.log("The number is odd.");
// }

// 2. check -ve +ve or 0

// let no=prompt("Enter the number");
// if(no>0){
//     console.log("The number is positive.");
// }
// else if(no<0){
//     console.log("The number is negative");
// }
// else{
//     console.log("The number is zero");
// }

//3. Value is no.  or Not 

// let b="dsfjkdskjfhjk"

// let c = typeof b;
// if (c === "number"){
//     console.log("The value is number");
// }
// else{
//     console.log("The value is not a number");
// }


//4. Check vowels or consonants
// let ch=prompt("Put the character");

// if (ch =="a" || ch=="o" || ch=="u" || ch=="i" || ch=="e" || ch =="A" || ch=="O" || ch=="U" || ch=="I" || ch=="E" ){
//     console.log("The character is vowel");
// }
// else {
// console.log("The character is consonant");
// }


// 5.check the greatest of the two numbers

// let a=prompt("Enter the number a")
// let b=prompt("Enter the number b")
// if (a>b){
//     console.log("The a number is greatest");
// }
// else if(a<b){
//     console.log("The b number is greatest");
// }
// else{
//     console.log("Null");
// }



// 6.check the smallest of the two numbers
// let c=prompt("Enter the number c")
// let d=prompt("Enter the number d")
// let e=prompt("Enter the number e")
// if (c<d && c<e){
//     console.log("The c number is smallest");
// }
// else if(d<e){
//     console.log("The d number is smallest");
// }
// else{
//     console.log("e is smallest");
// }


//  let numb1=prompt("Enter the number1")
//  let numb2=prompt("Enter the number2")
//  let operator=prompt("Enter the operator")
//  let c;
//  console.log(c);
// switch (operator) {
//     case '+':  c=numb1+numb2
//         console.log(c);
//           break;
//      case '-':
//         console.log(numb1-numb2);
//           break;
//      case '%':
//        console.log(numb1%numb2);
//          break;
//     case '*':
//         console.log(numb1*numb2);
//               break;
//     default:
//         console.log('invalid operator');
//         break;
// }



// let no=prompt("Enter the number");
// switch (true) {
//     case no%2==0:
//         console.log("The number is even.");
//          break;
  
//     default:
//        console.log("The number is odd.");
//       break;
// }


// let num=prompt("Enter the num")
// if (num>=0 && num<=100) {
//    console.log("Number is between the range");
// }
// else{
//   console.log("Number is outside the range");
// }

// switch (true) {
//   case (num>=100 && num<=600):
//   console.log("Number is between the range");
//     break;

//   default:
//     console.log("Number is outside the range");
//     break;
// }

// let year=prompt("Enter the year")
// let a=(year%4==0) || (year%400==0);
// if (a) {
//   console.log("Year is a leap year");
// }
// else{
//   console.log("Year is not a leap year");
// }

// switch (true) {
//   case a=(year%4==0) || (year%400==0):
//     console.log("Year is a leap year");
    
//     break;

//   default:
//     console.log("Year is not a leap year");
//     break;
// }

// let side1=prompt("Put the side1 of traingle")
// let side2=prompt("Put the side2 of traingle")
// let side3=prompt("Put the side3 of traingle")
// if ((side1==side2)&& (side2==side3) ){
//   console.log("Equilateral triangle");
// }
// else if((side1==side2) || (side2==side3) || (side1==side3)){
//     console.log("Isosceles triangle");
// }
// else{
//   console.log("Scalene triangle");
// }
// switch (true) {
//   case ((side1==side2)&& (side2==side3) ):{
//        console.log("Equilateral triangle");
//   }
//     break;
//    case ((side1==side2) || (side2==side3) || (side1==side3)):{
//         console.log("Isosceles triangle");
//    }
//    break;
//   default:
//     console.log("Scalene triangle");
//     break;
// }

// let month=prompt("Write the month name")
// if ((month=="september") || (month=="october") || (month=="november")) {
//      console.log("This is a Autumn season.");
// } 
// else if((month=="December") || (month=="January" ) || (month=="February" )){
//    console.log("This the season is Winter.")
// }
// else{
//   console.log("numb");
// }


// for(let i=0;i<100;i++){
//   console.log("sakshi", i);
// }


// for(i=0;i<=10;i++){
//   console.log(2*i);
// }  
// for(i=20;i>=0;i--){
//   console.log(i);
// }  
// for(i=0;i<=20;i++){

  
//  if(i%2==0){
//    console.log(i + "is even");
// }
// else{
//   console.log(i + "is odd");
// }
// }

array=["Sakshi","Sapna","Anu"]

// // console.log(array[2])

// for(let i of array){
//   console.log(i);
// }


// for(i=0;i<array.length;i++ ){
//   console.log(array[i]);
// }
                 
//while

let i=0;  //initialization
while(i<array.length){  //condition check
  console.log(array[i]); //statement of execution
  i++; //inc/dec
}


//do -while
let j=0;
do{
  console.log(array[j]);
  j++
}while(j<0)


