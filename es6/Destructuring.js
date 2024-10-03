const numbers = [10, 20, 30, 40];

// Destructuring array elements into variables
const [first, second] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20

const colors = ["red", "green", "blue", "yellow"];

// Skipping the second item
const [firstColor, , thirdColor] = colors;

console.log(firstColor); // Output: 'red'
console.log(thirdColor); // Output: 'blue'

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

// Destructuring object properties into variables
const { name, age } = person;

console.log(name); // Output: 'Alice'
console.log(age); // Output: 25

const user = {
  username: "john_doe",
  email: "john@example.com",
};

// Renaming properties during destructuring
const { username: userName, email: userEmail } = user;

console.log(userName); // Output: 'john_doe'
console.log(userEmail); // Output: 'john@example.com'

const employee = {
  id: 101,
  details: {
    firstName: "John",
    lastName: "Doe",
    position: "Developer",
  },
};

// Destructuring nested objects
const {
  details: { firstName, position },
} = employee;

console.log(firstName); // Output: 'John'
console.log(position); // Output: 'Developer'

const settings = {
  theme: "dark",
};

// Assigning default values during destructuring
const { theme, language = "English" } = settings;

console.log(theme); // Output: 'dark'
console.log(language); // Output: 'English' (default value)

const numbers = [1, [2, 3], [4, 5]];

const [one, [two, three], [four, five]] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4
console.log(five); // 5

const person = {
  name: "Jakir",
  address: {
    city: "Dhaka",
    zip: "1200",
  },
};

const {
  name,
  address: { city, zip },
} = person;

console.log(name); // Jakir
console.log(city); // Dhaka
console.log(zip); // 1200

const fruits = ["apple", "banana", "orange", "grape", "mango"];

const [first, second, ...rest] = fruits;

console.log(first); // apple
console.log(second); // banana
console.log(rest); // ['orange', 'grape', 'mango']

const userDetails = ({ id, name, email }) => {
  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
};

const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@example.com",
};

userDetails(user);

const user = {
  name: "Jakir",
  address: {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
  },
  preferences: {
    theme: "dark",
    notifications: true,
  },
};

const {
  name,
  address: { city, country },
  preferences: { theme },
} = user;

console.log(name); // Output: Jakir
console.log(city); // Output: Dhaka
console.log(country); // Output: Bangladesh
console.log(theme); // Output: dark
