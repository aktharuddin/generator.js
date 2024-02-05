const speech = ["failure=success in progress", "dream bigger do bigger", "go get it", "Were ever you are be present", "What we think , we become"];

function randomSpeech() {
    const randomIndex = Math.floor(Math.random() * speech.length);
    return speech[randomIndex];
}

const randomQuote = randomSpeech();
console.log(randomQuote);





