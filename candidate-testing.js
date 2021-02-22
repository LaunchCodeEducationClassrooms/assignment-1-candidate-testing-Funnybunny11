

const input = require('readline-sync');
let candidateName = "";
let question = "";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];


function askForName() {
  

let name = input.question("Please enter your name: ");
candidateName = name;
return candidateName;
}

askForName();

function askQuestion() {


questions = ["Who was the first American female in space? ", "True or false: 5000 meters = 5 kms: ", "(5+3) /2 * 10 = ", "Given the array [8, orbit, trajectory, 45], what entry is at index 2? ", "What is the minimum crew size of the ISS? "];

answers = ["Sally Ride", "true", "40", "trajectory", "3"];

for (let i = 0; i < 5; i++){



let question = input.question(`${questions[i]}`);
candidateAnswers[i] = question;
console.log("Your answer: ", candidateAnswers[i]);
console.log("Correct answer: ", answers[i]);

console.log();

}


}
askQuestion();

function gradeQuiz(candidateAnswers) {
let counter = 0;
let grade = 0;

for (let i = 0; i < 5; i++){

if (candidateAnswers[i] === answers[i]){
  counter = counter + 1;
} 
  grade = (counter/5 * 100);
}
console.log(">>> Overall grade: ", grade, "%", " ", counter, "out of 5 responses correct. <<<");
if (grade < 80) {
  console.log(">>> Status: FAILED <<<");
}else {
  console.log(">>> Status: PASSED <<<");

  
  

}  
}
gradeQuiz(candidateAnswers);

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(candidateAnswers);
  
}
runProgram();
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};