var a=10;

/**Datatypes  */
/***
 * 2 types of data types
 * 1. primitive 
 * 2. non primitive
 * 
 * rather than primitive data type everything is an object
 */

/**  Primitive data type
 * 
 * String
 * Number
 * BigInt
 * Boolean
 * undefined
 * null
 * 
 * 
 */

let name="sakshi"
let rollno=10;
let active=true;


// console.log(typeof test);

let obj=[{
    name:"sakshi",
    age:20,
    class:"MCA",
    fees:"2300",
    absent:false
},
{
    name:"sakshi",
    age:20,
    class:"MCA",
    fees:"2300",
    absent:false
},
{
    name:"sakshi",
    age:20,
    class:"MCA",
    fees:"2300",
    absent:false
},
]

let arr=["a","b","c","d"]
const date = new Date("2022-03-25");

// console.log(typeof date);
// console.log(typeof false);
// console.log(typeof 20);

/** type conversion */

let age ="33"
 age =null
 age =undefined
 age ="Sakshi"

age=Number(age)
// console.log(typeof age,age);


let status=false
 status=""
 status=5
 status=null
 status=Boolean(status)

// console.log(typeof status, status);


let num=33
num=true
num=null


num = Object(num)
// console.log(num, typeof num,"num");


let tel="32"
   tel=34
//    tel=null

tel = Array(tel)
console.log(tel ,typeof tel);