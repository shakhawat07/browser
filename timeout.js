function third() {
    console.log('Third');
}
console.log('First');
console.log('Second');
// setTimeout(third);
setTimeout(function Third() {
    console.log('Third');
}, 5000);
setTimeout(() => {
    console.log('Sixth');
}, 4000);
console.log('Fourth');
console.log('Fifth');