
// questions 


var quesArray = ["what is your name ? \n a) Manshul? \n b) Jhon?" ,  "how many dogs you have? \n a)2 \n b)1"]
var currentScore  = 0;
var questions = function () {
 return function options(number) {


    var SelectedQues = (Math.floor(Math.random()*quesArray.length));
    var number = prompt(quesArray[SelectedQues]);
     if (number == 1){
         console.log ("Correct Answer");
         currentScore++;
         console.log("your current score is "+ currentScore); 
         questions()();
     }else if(number ==2) {
         console.log("wrong answer");
         currentScore--;
         console.log("your current score is "+ currentScore+ "\n Beware as you might have noticed there is a negative marking here!"); 
         questions()();
     }else if (number === "exit"){
         return localStorage.clear();
     }
     
 }
} 



questions()();