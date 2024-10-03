const promise = new Promise((resolve, reject) => {
  const success = true; // সাফল্যের শর্ত

  if (success) {
    resolve("সফল হয়েছে!");
  } else {
    reject("ব্যর্থ হয়েছে!");
  }
});

promise
  .then((result) => console.log(result)) // সফল হলে এইটি চলবে
  .catch((error) => console.log(error)); // ব্যর্থ হলে এইটি চলবে

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Jakir", age: 25 };
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log("ফেচড ডেটা:", data))
  .catch((error) => console.log(error));

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Hello"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "Error")
);

Promise.all([promise1, promise2])
  .then((values) => {
    console.log("সকল Promise সফল:", values);
  })
  .catch((error) => {
    console.log("কোনো একটি Promise ব্যর্থ হয়েছে:", error);
  });

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("ধাপ ১ সম্পন্ন");
      resolve("ধাপ ১ এর ফলাফল");
    }, 1000);
  });
}

function step2(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("ধাপ ২ সম্পন্ন:", result);
      resolve("ধাপ ২ এর ফলাফল");
    }, 1000);
  });
}

step1()
  .then(step2)
  .then((result) => console.log("চূড়ান্ত ফলাফল:", result));

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("সংখ্যাটি ১০ এর বেশি!");
    } else {
      reject("সংখ্যাটি ১০ এর কম বা সমান!");
    }
  });
}

checkNumber(5)
  .then((result) => console.log(result))
  .catch((error) => console.log("ত্রুটি:", error));

const promiseA = new Promise((resolve) =>
  setTimeout(resolve, 500, "Promise A সফল হয়েছে!")
);
const promiseB = new Promise((resolve) =>
  setTimeout(resolve, 300, "Promise B সফল হয়েছে!")
);

Promise.race([promiseA, promiseB])
  .then((result) => console.log("প্রথম Promise যা সফল হয়েছে:", result))
  .catch((error) => console.log("ত্রুটি:", error));
