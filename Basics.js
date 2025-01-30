let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!";
let isLearningFun = true;

console.log(score);
console.log(temperature);
console.log(greeting);
console.log(isLearningFun);

student = {
    name: "Devanshi Gupta",
    age: 19,
    subjects: ["465", "263", "461", "311", "270"],
}

student.isGraduated = false;

Primes = [2,3,5,7,11]
Primes[1] = 4
console.log(Primes, "Mistake detected")

Primes[1] = 3
console.log(Primes)

let x = 15; y = 10;
let sum = x+y;
let product = x*y;
let modulus = x%y;
console.log(sum, product, modulus);

let a = 2; b = 3;

console.log("x>y", x>y);
console.log("x<y", x<y);
console.log("x==y", x==y);

console.log("AND", a<b && a==b);
console.log("OR", a<b || a==b);

if (score>50){console.log("Great job!");}
else{console.log("Keep trying!");}


for (let i of primeNumbers){
    console.log(i);
}

while (score>0){
    score--;
}

function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;
  
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
  }
  
  const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
  console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024


function swap(a,b,c){
    let temp = a;
    a = b;
    b = c;
    c = temp;
    return [a,b,c];
}

let List = swap[1,2,3];
console.log(List);

function findLongestWord(str){
    let words = str.split(" ");
    let longestWord = "";

    for (let word of words){
        if (word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

