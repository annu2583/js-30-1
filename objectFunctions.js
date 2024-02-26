
// let obj={
//     name:"Sakshi",
//     status:true,
//     age:30
// }

// let obj2={
//     age:40,
//     status:false,
//     job:"SE"
// }


// // let obj3=Object.create(obj2)

// // console.log(obj.name, obj.age);
// Object.assign(obj2,obj)
// console.log(obj2)

// obj3.age=40;

// console.log(obj3);


// let obj4=Object.create()

// obj2.name="Anu"
// obj2.job="Student"

// delete obj2.name

// console.log(Object.values(obj2));
// console.log(Object.keys(obj2));
// console.log(Object.entries(obj2));


// Object.freeze(obj2)

// Object.seal(obj2)

// obj2.salary=0;
// delete obj2.job

// obj2.name="Annu"

// console.log(obj2);

// console.log(Object.isFrozen(obj2));



// console.log(Object.hasOwn(obj2,'name'));
// console.log(obj2.hasOwnProperty("name"));

// let oobj4=obj

// Object.assign(oobj4,obj)

// console.log(obj);
// console.log(oobj4);

// console.log(Object.is(oobj4,obj));

// let obj={
//     name:"Sneha",
//     class:"+2",
//     age: "18",
//     eligible: "yes"
    
// }
// // console.log(obj + "+++++");
// let obj2={
//     name:"Khushi",
//     class:"B.SC",
//     age:"21",
//     eligible: "True"
// }
// // delete obj2.name;
// Object.seal(obj2)

// obj2.class="B.A"

// obj2.salary="15k"

// console.log(obj2);
// console.log(Object.isSealed(obj2));


// Object.freeze(obj);
// obj.age="21"

// obj.name="Saho"

// console.log(obj);
// console.log(Object.isFrozen(obj));
// console.log(Object.is("4","4"));

// console.log(Object.hasOwn(obj2,'job'));
// console.log(obj2.hasOwnProperty("job"));


// console.log(obj.name,obj.class,obj.age,obj.eligible);
// let obj3=Object.create(obj2)
// console.log(obj2);
// obj3.age="30"
// console.log(obj3);

// Object.assign(obj,obj2);
// console.log(obj);

// console.log(Object.values(obj));

// console.log(Object.keys(obj));

// console.log(Object.entries(obj));


// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42],
//   ]);
// const obj=(Object.fromEntries(entries));
//   console.log(obj);
  
// let target={a:4,b:5}
// let source={a:6,b:6}
// // let value= Object.assign(target,source);
// // console.log(target);
//   let value=Object.create(target);
//   console.log(source);


  let obj3={
     new:"style",
     class:"4th",
     ability:"proper"
  }
//   Object.freeze(obj3);
//   obj3.job="formal"
//   console.log(Object.isFrozen(obj3));
// console.log(Object.values(obj3));
// console.log(obj3);
// console.log(Object.hasOwn(obj3,"new"));
console.log(obj3.hasOwnProperty("new"));


// const person={
//     name:"Sakshi",
//     print:function(){
//         console.log("my name is "+ this.name)
//     }
// }


// let newObj= Object.create(person)
// newObj.name="Anu"
// newObj.print()
// person.print()

// Object.seal(obj3)

obj3.new="sakshi"

Object.preventExtensions(obj3)

obj3.name="sakshi"

const obj=new Object()


console.log(obj3);

let obj4=[
    {
        name:"Sakhsi",
        age:"20",
        class:"5"
    },
    {
        name:"Anu",
        age:"20",
        class:"5"
    }
]
for(let i=0;i<obj4.length;i++){
    console.log(obj4[i]);
}