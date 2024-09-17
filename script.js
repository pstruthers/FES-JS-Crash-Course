const statusRef = document.querySelector(".status");

// Creating a new promise
function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}

// Accessing promise using async/await
async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

main();
