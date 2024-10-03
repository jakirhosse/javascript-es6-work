function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Jakir")); // Output: Hello, Jakir!

function calculateArea(length = 5, width = 10) {
  return length * width;
}

console.log(calculateArea()); // Output: 50
console.log(calculateArea(7)); // Output: 70 (7 * 10)
console.log(calculateArea(7, 3)); // Output: 21 (7 * 3)

function sayMessage(message = "No message provided", times = 1) {
  for (let i = 0; i < times; i++) {
    console.log(message);
  }
}

sayMessage();
// Output: No message provided (printed once)

sayMessage("Hello!", 3);
// Output: Hello! (printed 3 times)

function sum(a = 10, b = a * 2) {
  return a + b;
}

console.log(sum()); // Output: 30 (10 + 20)
console.log(sum(5)); // Output: 15 (5 + 10)
console.log(sum(3, 4)); // Output: 7 (3 + 4)

function multiply(x = 2, y = 3) {
  return x * y;
}

console.log(multiply(5, undefined)); // Output: 15 (5 * 3, as undefined triggers the default for y)
console.log(multiply(undefined, 4)); // Output: 8 (2 * 4, as undefined triggers the default for x)


function addAll(x = 0, ...numbers) {
        return x + numbers.reduce((acc, curr) => acc + curr, 0);
    }
    
    console.log(addAll(5, 1, 2, 3)); // Output: 11 (5 + 1 + 2 + 3)
    console.log(addAll()); // Output: 0 (no numbers, only default value of x = 0)
    

    function processData(data, callback = (item) => item * 2) {
        return data.map(callback);
    }
    
    const numbers = [1, 2, 3, 4];
    
    console.log(processData(numbers)); 
    // আউটপুট: [2, 4, 6, 8] (ডিফল্ট কলব্যাক: প্রতিটি আইটেমকে ২ দিয়ে গুণ করা হয়েছে)
    
    console.log(processData(numbers, (item) => item + 5)); 
    // আউটপুট: [6, 7, 8, 9] (কাস্টম কলব্যাক: প্রতিটি আইটেমে ৫ যোগ করা হয়েছে)
    


    function createUser({name = "অতিথি", age = 18, role = "ব্যবহারকারী"} = {}) {
        return `নাম: ${name}, বয়স: ${age}, ভূমিকা: ${role}`;
    }
    
    console.log(createUser()); 
    // আউটপুট: নাম: অতিথি, বয়স: ১৮, ভূমিকা: ব্যবহারকারী
    
    console.log(createUser({name: "জাকির", age: ২৫})); 
    // আউটপুট: নাম: জাকির, বয়স: ২৫, ভূমিকা: ব্যবহারকারী
    

    function getRandom() {
        return Math.floor(Math.random() * 100);
    }
    
    function calculateTotal(price, tax = getRandom()) {
        return price + tax;
    }
    
    console.log(calculateTotal(500)); 
    // আউটপুট: ৫০০ এর সাথে একটি র‍্যান্ডম ট্যাক্স যোগ করা হয়েছে
    
    console.log(calculateTotal(500, 50)); 
    // আউটপুট: ৫৫০ (৫০০ + ৫০)
    