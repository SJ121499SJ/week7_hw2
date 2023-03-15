/* EXERCISE ONE */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (const key of Object.keys(person3)) {
    console.log(`${key} : ${person3[key]}`)
}


/* EXERCISE TWO */

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    printInfo(){
        console.log(`${this.name} is ${this.age} years old!`)
    }

    addYear(){
        console.log(`${this.name} is now ${this.age+1} years old!`)
    }
}

const person1 = new Person("SJ", 22)
const person2 = new Person("Harry", 18)

person1.printInfo()
person1.addYear()
person2.printInfo()
person2.addYear()

/* CODEWARS PROBLEMS */

/* Problem 1) Return the opposite number (Positive/Negative) */

const oppositeNum = (num) => {
    console.log(num*-1)
}

oppositeNum(55)


/* Problem 2) Convert a Number to a String */

const convertToString = (num) => {
    console.log(num)
    console.log(String(num))
}

convertToString(5)