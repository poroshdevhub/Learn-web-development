
// Asynchronous JavaScript

/**
 • Event Loop mechanism
 • Promises deep dive
 • Async / Await mastery
 • Microtask vs Microtask queue
 • Error handling with async code
 • API integration (Fetch / Axios)
 
 */


/***
 *  1. Event Loop Mechanism   =>  javaScript is one thread run. but async work handle do event loop 
 *  2. Promises Deep Dive     =>  A Promise is an object in JavaScript that represents the future result of an asynchronous operation
(success or failure)Pending → Fulfilled / Rejected
 * 
 *  3. Async / Await Mastery  =>  👉 async function always returns Promise and 👉 Await wait for Promise resolve
 * 
 *  4. Microtask vs Microtask queue     =>  Microtask = async work (Promise, await) Microtask Queue = waiting line of those works 
 *  5. Error handling with async code   => 👉 “Error handling in async code is done using .catch() for Promises and try/catch for async/await, 
  and it ensures that both network and runtime errors are properly handled without breaking execution.


 * 6. API integration (Fetch / Axios)   => 👉 “Fetch is a native API requiring manual handling of JSON and errors, while Axios is a third-party library that simplifies HTTP requests with automatic JSON parsing, better error handling, and advanced features like interceptors.


*/

// Create Promise
const p = new Promise((resolve, reject) => {
    resolve('success');
})


/*====== async / await ========*/
async function getData() {
    const res = await fetch("/api"); // Promise<Response>
    const data = await res.json();// Promise
    console.log(data);
}


// ⚡ try / catch error handler
async function loadData() {
    try {
        const user = await fetch("/user");
        console.log(user);

    } catch (err) {
        console.log("Something failed:", err);
    }
}


//  Advanced pattern (safe parallel calls)
async function getAll() {
    try {
        const [userRes, postRes] = await Promise.all([
            fetch("/user"),
            fetch("/posts")
        ]);

        const user = await userRes.json();
        const posts = await postRes.json();

        console.log(user, posts);

    } catch (err) {
        console.log("Error:", err);
    }
}



// 🟢 1. FETCH (Built-in)

// POST
await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "John" })
});

// GET
const res = await fetch("/users");
const data = await res.json();



// 🔵 2. AXIOS (Library) => npm install axios

// POST
const res = await axios.post("/users", {
    name: "John"
});

// GET
const res = await axios.get("/users");
console.log(res.data);