function getMessage {
    const messages = ["Be mine", "I love you", "CU L8R", "Smile", "Cutie pie", "Love bug"];
    let message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

