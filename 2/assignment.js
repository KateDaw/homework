function add() {
alert(4 + 12);
}
function get(name) {
alert(name);
}
add();
get('Michael');
const task3Element = document.getElementById('task-3');
task3Element.onclick = function() {
console.log('click');
}
function returnlines(first,second,third) {
return first + second + third;
}
let newfunc = returnlines('they','got', 'it');
alert(newfunc);
