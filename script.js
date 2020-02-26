let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let createQuestion = function(questionText, choice1 , choice2 , choice3 , choice4, correctChoice) {
    question.innerText = questionText;
    btn1.innerText = choice1;
    btn2.innerText = choice2;
    btn3.innerText = choice3;
    btn4.innerText = choice4;
};
let pleasedoIt = function(){

    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};
    btn4.onclick = function(){checkCorrect(this)};

    if(count === 0){
        createQuestion("What was Playboi Carti's first rap name?", "$ir Cartier", "Slatt", "Uzi", "Fetti" , "$ir Cartier");

    }else if(count === 1){
        createQuestion("What is track 1 on Die Lit?" , "Lean 4 Real", "Pull Up", "Mileage", "Long Time" , "Long Time");
    }else if(count === 2){
        createQuestion("What is one of Carti's most popular songs?", "Magnolia", "Shoota", "Poke It Out", "Love Hurts", "Magnolia");
    }else if(count === 3){
        createQuestion("Will Whole Lotta Red ever drop?", "Maybe", "Yes", "No", "When Uzi drops EA", "Maybe");
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }

    document.getElementById("progress").innerText = "Question " + (count + 1) + " of " + numQuestions;

};

let checkCorrect = function(button){
    if(button === correctOne){
        numRight++;
    }
    count++;
    pleasedoIt();
};