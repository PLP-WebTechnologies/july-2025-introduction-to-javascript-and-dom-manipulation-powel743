// Part 1: Variables and Conditionals
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', function() {
  const age = parseInt(document.getElementById('ageInput').value);
  
  if (isNaN(age)) {
    ageResult.textContent = "Please enter a valid number!";
  } else if (age >= 18) {
    ageResult.textContent = "You are an adult ✅";
  } else {
    ageResult.textContent = "You are a minor ❌";
  }
});
// Part 2: Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function doubleNumber(num) {
  return num * 2;
}
const greetBtn = document.getElementById('greetBtn');
const greetResult = document.getElementById('greetResult');

greetBtn.addEventListener('click', function() {
  const name = prompt("Enter your name:");
  greetResult.textContent = greetUser(name);
});
// Part 3: Loops
const loopBtn = document.getElementById('loopBtn');
const loopResult = document.getElementById('loopResult');

loopBtn.addEventListener('click', function() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  loopResult.textContent = output;
});
// Example of while loop
let count = 1;
while (count <= 3) {
  console.log("Counting:", count);
  count++;
}
// Part 4: DOM Manipulation
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});

const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
let itemCount = 1;

addItemBtn.addEventListener('click', function() {
  const li = document.createElement('li');
  li.textContent = `Item ${itemCount}`;
  itemList.appendChild(li);
  itemCount++;
});
