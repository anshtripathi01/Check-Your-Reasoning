var readlineSync = require('readline-sync');
var chalk = require("chalk");
var userName=readlineSync.question('Let me your Name: ');
console.log('welcome to '+chalk.blue(userName)+ " Let's begin Challeng Best Of Luck");


var score=0;

console.log("\n");
console.log("--------------");
console.log("Cautions :");
console.log("--------------");
console.log("Please Answer the Questions Carefully Because every right Answer 2 marks will be awarded and every wrong answer 1 mark is deducted. Best Of Luck.......");
console.log("\n"); 
var topScorer = [
  {
    name: "John",
    score: 3
  },
  {
    name: "marry",
    score: 2
  }
]
var questions=[{
  question:
  "1.SCD, TEF, UGH, ____, WKL? \n\n A. CMN B.	UJI C.	VIJ D.	IJT \n",
  answer:"C"
  },

  {
    question:"\n2.	CMM, EOO, GQQ, _____, KUU? \nA.	GRR B.	GSS C.	ISS D.	ITT \n",
  answer:"C"
},
{
  question:"\n 3. Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?\nA.	7 B.	10 C.	12 D.	13\n",
  answer:"B"

},
{
  question:"\n 4. 5,8,11,14,17,...?\n\n A. 30 B. 21 C. 18  D. 20\n",
  answer:"D"

},
{
  question:"\nIf in a certain language, MADRAS is coded as NBESBT. Then how is BOMBAY coded in that language?\n\n A. CPNCBX B. CPNCBZ C.CPOCBZ D. CQOCBZ\n",
  answer: "B"
}
];
function play(question,answer){
  var userAnswer=readlineSync.question(question);
if(userAnswer.toUpperCase()==answer){
   console.log(chalk.green("\nYou're right"))
  score++;
  
}
else{
  console.log(chalk.red('\nYou are Wrong!'));
  score--;
  
}
console.log("\nTotal Score :" +score);

}

for(var i=0;i<questions.length;i++){
  
  play(questions[i].question,questions[i].answer);
}
console.log("\nOur Topper List:\n")
for (i=0;i<topScorer.length;i++)
{
  console.log((i+1)+" Name: "+topScorer[i].name)
  console.log("  Score: "+topScorer[i].score)
  console.log("---------------")
  
}
function qualified(score){
var high=3;
if(score>high){
    console.log(chalk.green("\n(Congrats!) You are Topper Please ping me Your score at (topper@email.com)"));
    i++;
  }
  else{
    console.log(chalk.red("Oops! Better Luck next Time"));
  }
}

  


qualified(score);


console.log('\nThank You! For Playing  Mr.'+userName);