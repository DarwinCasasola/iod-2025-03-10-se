function randomDelay() {
    return new Promise((resolve, reject) => {
        // Random delay between 1 and 20 seconds (in ms)
        const delayInSeconds = Math.floor(Math.random() * 20) + 1;
        const delayInMs = delayInSeconds * 1000;

        setTimeout(() => {
            if (delayInSeconds % 2 === 0) {
                resolve(delayInSeconds);
            } else {
                reject(delayInSeconds);
            }
        }, delayInMs);
    });
}

// Call and handle the result
randomDelay()
    .then((delay) => {
        console.log(`Success after ${delay} second(s): There appears to have been a delay.`);
    })
    .catch((delay) => {
        console.log(`Failed after ${delay} second(s): Delay was odd, operation rejected.`);
    });
