// setTimeout(() => {
//     console.log('Hi!');
//     setTimeout(() => {
//         console.log('Hello!');
//         setTimeout(() => {
//             console.log('Hello There!');
//         }, 5000);
//     }, 3000);
// }, 1000);

//writing the same code using promise chaining

function setTimeoutPromisified(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('This is asynchronous code!');
            resolve();
        }, ms);
    })
}

setTimeoutPromisified(1000)
.then(() => {
    console.log('Hi!');
    return setTimeoutPromisified(3000);
})
.then(() => {
    console.log('Hello!');
    return setTimeoutPromisified(5000);
})
.then(() => {
    console.log('Hello there!');
})

console.log('This is synchronous code!');