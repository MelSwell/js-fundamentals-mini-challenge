// ***** Question 1 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 1", "color: red") 
let counter = 1;

counter++;

console.log(counter); 
 // => 2
 console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
console.log("%cQuestion 2", "color: red") 
const name = "Seth";
console.log(name);
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
console.log("%c----------", "color: red") 


// ***** Question 3 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 3", "color: red")

const drinkWater = currentThirstLevel => {
  console.log("Man I sure am thirsty");
  currentThirstLevel -= 1;
  console.log("Ahh that hits the spot")
  return currentThirstLevel;
}


console.log(drinkWater(12))
// // => "Man I sure am thirsty"
// // => "Ahh that hits the spot"
// // => 11
console.log("%c----------", "color: red") 



// ***** Question 4 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 4", "color: red") 

const sameSameButDifferent = (arg1, arg2) => {
  if (arg1 === arg2){
    return "same same"
  } else if (arg1 == arg2){
    return "same same (but different)"
  } else {
    return "different"
  }
}

console.log(sameSameButDifferent(5, 5)) 
// // => "same same"

console.log(sameSameButDifferent(123, "123")) 
// // => "same same (but different)"

console.log(sameSameButDifferent(5, 7)) 
// // => "different"

console.log(sameSameButDifferent(123, "122")) 
// // => "different"
console.log("%c----------", "color: red") 



// ***** Question 5 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 5", "color: red")
const student1 = { name: "Duane", grade: 88 }

const updateGrade = (student, newGrade) => {
  student.grade = newGrade;
  return student;
}

updateGrade(student1, 92)
console.log(student1)
// // => { name: "Duane", grade: 92 }
console.log("%c----------", "color: red")



// ***** Question 6 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]

const printNameAndPhones = obj => {
  for (const key in obj){
    console.log(obj[key]);
  }
}

printNameAndPhones(users)
// // => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 1", "color: red")

const triple = num => {
  return num * 3;
}

console.log(myMap([1,2,3,4,5], triple)) 
// // => [3,6,9,12,15]

// console.log(myMap([2,4,6,8], triple))   
// // => [6,12,18,24]
console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****
// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 2", "color: red")

const greet = person => {
  return `Hi, ${person}!`
}

console.log(myMap(["Raffy", "Chase"], greet)) 
// // => ["Hi, Raffy!", "Hi, Chase!"]
console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []
let ticketNumber = 0
// ***** Scope & Closures - Question 1 *****


// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 1", "color: red")

const takeATicketNumber = line => {
  line.push(line.length + 1)
  ticketNumber++
  return `Welcome. You are ticket number ${ticketNumber}`;
}


console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 1`

console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 2`

console.log(nowServing(line))
// // => `Currently serving 1.`

console.log(nowServing(line))
// // => `Currently serving 2.`

console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 3`


console.log("%c----------", "color: red") 

// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 2", "color: red")

//This isn't working and I frankly don't even understand how it's even able to get
// as far as it does lol... 

const ticketNumberGeneratorFunc = () => {
  const ticketNumFunction = arr => {
    arr.push(arr.length + 1)
    let ticket = arr.length;
    return `Welcome. You are ticket number ${ticket}` 
  }
  return ticketNumFunction
}

const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// // => `Currently serving 1.`

console.log(nowServing(newLine))
// // => `Currently serving 2.`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 