//variables
/**
 *  let var const 
 * 
*/

// console.log("Variables");
// var name="Sakshi"
// let age=23
// name=33
// console.log(name,"my name is ");
// console.log(age,"my name is ");
let names;
console.log(names);

// declaration

var a=10
var a=20;

let b=20;
 b=10;
console.log(b);

var classs="BCA"  //var has global scope
console.log(classs,"1");
{
   let rollno="1"
    console.log(classs,"2");
}
// console.log(rollno,"rollno");

let name="sakshi" //let has local scope or functional scope
name="Sethi"
console.log(name,"1");
{
    let age="ANU"
    console.log(age,"2");
    console.log(age, "5");
}
console.log(name,"3");

const ab=40; //local scope
{
  const  ab=50;
    console.log(ab,"ab");
  }
  console.log(ab,"bc");
  

/**
 * login into git
 * download git on local system
 * add credentials 
 *      git config --global user.email "your_email"
 *      git config --global user.name "your_name" annu2583
 * git clone https://github.com/annu2583/js-30-1.git
 */

/***
 * git add .
 * git commit -m "work on variables"
 * git pull
 * git push
 */
