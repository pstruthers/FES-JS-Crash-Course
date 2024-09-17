// JAVASCRIPT

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video")

// Creating a new promise
function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIadfP");
  });
}

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        } else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        } else {
            reject("no video")
        }
    })
}

// Accessing promise using async/await
async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  // use a try-catch to display error message without throwing an actual error
  try {
      console.log(await getVideo(status))
  }
  catch(e) {
    console.log(e)
    videoRef.innerHTML = e
  }
}

main();
