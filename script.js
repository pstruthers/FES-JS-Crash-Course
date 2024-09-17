const emailRef = document.querySelector(".email");

// Method 1: Then
 fetch("https://jsonplaceholder.typicode.com/users/1") // fetch data from backend API
   .then((response) => { // use .then() to unlock data
     return response.json(); // return the response from fetching; add .json() to response to make it compatible with frontend; when returning response, whole thing becomes a promise
   })
   .then((data) => { // .then() to unlock promise as a result from returning the response
     console.log(data);
     emailRef.innerHTML = data.email // display the user's email on the website
   });

// Method 2: Async/Await
async function main() { // must put await inside of an async function
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); // add await before a promise and store it in a variable
  const data = await response.json(); // add await before a promise and store it in a variable
  console.log(data);
  emailRef.innerHTML = data.email; // display user's email on the website
}

main();
