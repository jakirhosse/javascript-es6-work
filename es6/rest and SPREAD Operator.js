// Rest operator ///

const person = {
  name: "Jakir",
  age: 24,
  job: "Web Developer",
};

const { name, ...details } = person;

console.log(name); // আউটপুট: Jakir
console.log(details); // আউটপুট: { age: 24, job: 'Web Developer' }

function add(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(1, 2, 3, 4)); // আউটপুট: 10

const user = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const { name, ...rest } = user;

console.log(name); // আউটপুট: Alice
console.log(rest); // আউটপুট: { age: 25, city: 'New York' }

const fruits = ["apple", "banana", "orange", "grape"];

const [first, ...restFruits] = fruits;

console.log(first); // আউটপুট: apple
console.log(restFruits); // আউটপুট: ['banana', 'orange', 'grape']

function greet(message, ...names) {
  return `${message}, ${names.join(" and ")}!`;
}

console.log(greet("Hello", "John", "Jane", "Doe")); // আউটপুট: Hello, John and Jane and Doe!

//     spreate opreatore ///////////////////////

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // আউটপুট: [1, 2, 3, 4, 5]

const person = { name: "Bob", age: 30 };
const updatedPerson = { ...person, job: "Engineer" };

console.log(updatedPerson);
// আউটপুট: { name: 'Bob', age: 30, job: 'Engineer' }

const fruits = ["apple", "banana", "orange"];
const moreFruits = ["mango", ...fruits];

console.log(moreFruits); // আউটপুট: ['mango', 'apple', 'banana', 'orange']

function multiply(x, y, z) {
  return x * y * z;
}

const values = [2, 3, 4];
console.log(multiply(...values)); // আউটপুট: 24

const person = {
  name: "Jakir",
  age: 24,
};

const updatedPerson = {
  ...person,
  job: "Web Developer",
};

console.log(updatedPerson);
// আউটপুট: { name: 'Jakir', age: 24, job: 'Web Developer' }

// spread operator advanced code example
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray]; // মূল অ্যারেটি কপি করা হলো

copiedArray.push(5); // কপি করা অ্যারেতে নতুন উপাদান যোগ করা হলো

console.log(originalArray); // আউটপুট: [1, 2, 3, 4] (মূল অ্যারে অপরিবর্তিত)
console.log(copiedArray); // আউটপুট: [1, 2, 3, 4, 5] (কপি করা অ্যারে পরিবর্তিত)

const originalObject = { name: "John", age: 25 };
const copiedObject = { ...originalObject }; // মূল অবজেক্ট কপি করা হলো

copiedObject.job = "Engineer"; // কপি করা অবজেক্টে নতুন প্রপার্টি যোগ করা হলো

console.log(originalObject); // আউটপুট: { name: 'John', age: 25 } (মূল অবজেক্ট অপরিবর্তিত)
console.log(copiedObject); // আউটপুট: { name: 'John', age: 25, job: 'Engineer' } (কপি করা অবজেক্ট পরিবর্তিত)
