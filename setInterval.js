console.log('First');
// setInterval(() => {
//     console.log('tik tok');
// }, 1000);
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    console.log(seconds++);
    // console.log(++seconds);
    if (seconds > 5) {
        clearInterval(timeId);
    }
}, 1000);
console.log('Second');