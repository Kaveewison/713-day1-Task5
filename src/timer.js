waitAndPrint = (message, delay) => {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

waitAndPrint("Hello, world!", 2000);

let count = 1;

const repeatedPrint = () => {

    const worldString = " world".repeat(count);
    const message = `hello,${worldString}!`;
    console.log(message);

    count++;
};

setInterval(repeatedPrint, 3000);