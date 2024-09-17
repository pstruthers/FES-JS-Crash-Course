// Creating a new promise
function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}

// Accessing promise using .then()
getSubscriptionStatus().then((response) => console.log(response)); // no need to use .json() since it's not coming from backend

// Accessing promise using async/await
async function main() {
  console.log(await getSubscriptionStatus());
}

main();
