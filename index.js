// questions from https://www.buzzfeed.com/buggsuperstar/the-ultimate-dwight-schrute-trivia-quiz-9rbdec7aay

const readlineSync = require("readline-sync");

var questions = [
    {
        "question" : "What's Dwight's middle name?",
        "answer" : "Kurt"
    },
    {
        "question" : "Finish this Dwight quote: \"Those who can't farm...\"",
        "answer" : "\"farm celery\""
    },
    {
        "question" : "From what ages was Dwight shunned by his family for failing to save the excess oil from a can of tuna?",
        "answer" : "four to six" 
        // personal fav
    }
];

var hish_scores = [
    {
        "name" : "Divyansh",
        "score" : 3
    },
    {
        "name" : "Imaginary_friend", // always there for me btw 
        "score" : 2 
    },
];

var score = 0;
var name = "";

function welcome(){
    name = readlineSync.question("whats ur name?\n");
    console.log("waddup",name, "\nWelcome to the Dwight Schrute Trivia Quiz");
}
function ask_ques(card, curr_score)
{
    let res = readlineSync.question(card.question+" ");
    if(res.toLowerCase() === card.answer.toLowerCase())
    {
        console.log("\n+1 (¬‿¬)\n");
        curr_score += 1;
    }
    else{
        console.log("\nno, the answer is", card.answer, "(ㆆ_ㆆ)\n");
    }
    return curr_score;
}
function game(){
    for( let i = 0; i < questions.length; i += 1)
    {
        score = ask_ques(questions[i], score);
    }
}
function show_score()
{
    console.log("your score is", score);
}
welcome();
game();
show_score();