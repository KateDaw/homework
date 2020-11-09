const randomNumber = Math.random();

//-------— first task —-------
if (randomNumber >= 0.7) {
alert(randomNumber);
};

//-------— second task —-------
let array = [2, 4, 6, 10, 5, 213];

for (let i = 0; i <= array.length -1; i++){
console.log(array[i]);
}
for (const log of array) {
console.log(log);
}
//------------third task —-------—
for (let i = array.length -1; i >= 0; i--) {
console.log(array[i]);
}

//-------— fourth task —-------
const randomNumber2 = Math.random();

if (randomNumber2 > 0.7 && randomNumber > 0.7 || randomNumber2 < 0.2 || randomNumber < 0.2) {
alert('That is perfect');
}
