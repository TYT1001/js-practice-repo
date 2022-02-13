const makingRequest(location) => {
  let new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if(location === "Google") {
      resolve('Google says hi')
    } else {
      reject('We can only talk to Google')
    }
  })

}