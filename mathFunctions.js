// let num =Math.ceil(5.789)
// console.log(num);


// let num =Math.floor(5.789)
// console.log(num);

// let num =Math.max(1,45,65,-45);
// console.log(num);

// let num =Math.min(1,45,65,-45);
// console.log(num);

// let num =Math.pow(4,5);
// console.log(num);

let num =Math.random();
console.log(num*34);


// let num =Math.round(45.788);
// console.log(num);


// let num =Math.sign(-56);
// console.log(num);

// let num =Math.sqrt(369);
// console.log(num);

// let num =Math.trunc(344.566);
// console.log(num);


let obj={
    name:"Sakshi",
    status:true,
    age:30
}

let obj2={
    age:40,
    status:false,
    job:"SE"
}


// let obj3=Object.create(obj2)

// console.log(obj.name, obj.age);
// Object.assign(obj2,obj)
// console.log(obj2)

// obj3.age=40;

// console.log(obj3);


// let obj4=Object.create()

obj2.name="Anu"
obj2.job="Student"

// delete obj2.name

console.log(Object.values(obj2));
console.log(Object.keys(obj2));
console.log(Object.entries(obj2));


// Object.freeze(obj2)

// Object.seal(obj2)

// obj2.salary=0;
// delete obj2.job

// obj2.name="Annu"

// console.log(obj2);

// console.log(Object.isFrozen(obj2));



console.log(Object.hasOwn(obj2,'name'));
console.log(obj2.hasOwnProperty("name"));

let oobj4=obj

// Object.assign(oobj4,obj)

console.log(obj);
console.log(oobj4);

console.log(Object.is(oobj4,obj));
