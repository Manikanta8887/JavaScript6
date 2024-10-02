 // 1 Question 

 var car={
    make:"Rolls Royce",
    model: "Phantom",
    year:2024
 }

 console.log(car);

 Object.freeze(car);
 car.model="Buggati";
 console.log(car);

// 2 Question

var user={
    name:"Manikanta",
    age:22,
    email:"swamimanikanta66@gmail.com"
}

var b=Object.isFrozen(user);
console.log(b);


// 3 Question

var product={
    name:"Laptop",
    category:"Electronic Devices",
    price:75000
}

var c=Object.isSealed(product);
console.log(c);


// 4 Question

var laptop={
    brand:"HP",
    model:"HP PAVILION",
    price:75000
}

var d=Object.keys(laptop);
console.log(d);


// 5 Question

var house={
    location:"RAJAHMUNDRY",
    size:"2 ACRE",
    price:2500000
}

var e=Object.values(house);
console.log(e);


// 6 Question

var smartphone={
    brand:"SAMSUNG",
    model:"S22",
    price:75000
}

Object.seal(smartphone);

smartphone.price=80000;

console.log(Object.isSealed(smartphone));


// 7 Question

var book={
    title:"WINGS OF FIRE",
    model:"DR.APJ.ABDUL KALAM",
    publishedYear:1998
}


Object.freeze(book);
book.publishedYear=2006;
console.log(Object.isFrozen(book));


// 8 Question

var person={
    firstname:"Manikanta",
    lastName:"Thirnati",
    age:22
}

var g=Object.keys(person);
var h=Object.values(person);
console.log(g,h);

// 9 Question

var course={
    title:"Java Full Stack",
    instructor:"Vamsi",
    Duration:"6 Months"
}

var i=Object.entries(course);
console.log(i);

delete course.Duration;
console.log(course);


// 10 Question

var employee={
    name:"Manikanta",
    position:"Developer",
    salary:120000
}

var j=Object.seal(employee);
employee.position="Senior Developer"
console.log(Object.keys(employee));

employee.Location="Hyderabad";
employee.Age=22;
console.log(employee);