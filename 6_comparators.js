// comparators are such as ===,!=, >=, <=, >, <.

// from random number generator example
// you can compare more values by combining them
// using AND(&&), OR(||) to make better decisions.


prompt(" what is your name? ");
prompt(" What is their name? ");

var score = Math.random()*100; // 100 rand numbers generator.
var score = Math.floor(score) +1; // Exact 1 - 100

//Control flow.
if(score > 70){
    alert(" Your score is " + score + " %. "+ "You are compatible! ")

}
else{
    alert(" Your score is " + score + " %. ")
}

if(score >30 && score <= 70){
    alert(" Your score is " + score + " %.")
}

if(score <=30 ){
    alert(" Your score is " + score + " %." + " You go together like oil and water! ");
}

///\\\ MORE WITH COMPARATORS USING A BMI EXAMPLE.////\\\\

function bmiCalc(kg,meters){
    var bmindex = kg/ Math.pow(meters,2);
    return bmindex;
}

var kg = prompt(" what is your weight ?");
var meters = prompt(" What is your height? ");
var bmi = Math.floor( bmiCalc(kg,meters));

if(bmi < 18.5){
alert("Your bmi is "+ bmi +" You are under weight! ");
    }

    if(bmi >= 18.5 && bmi <= 24.9){
    alert("Your bmi is "+ bmi +". You have normal weight! ");
         }
         if( bmi >= 25 && bmi <= 29.9){
            alert("Your bmi is "+ bmi +". You are over weight! ");
            }

            if(bmi >= 30 && bmi <= 34.9){
                alert("Your bmi is "+ bmi +" You are Obese !! ");
                }
                if(bmi > 35 ){
                    alert("Your bmi is "+ bmi +" You extremly over weight! ");
                    }
