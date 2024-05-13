let int_to_rps = {
    0 : "rock",
    1 : "paper",
    2 : "scissors"
}
function rps_calc(user_input) {
    let com_input = random_input();
    let greater_variable = -1;
    let smaller_variable = -1;
    if (user_input > com_input){
        greater_variable = user_input;
        smaller_variable = com_input;
    } else if (com_input > user_input){
        greater_variable = com_input;
        smaller_variable = user_input;
    } else {
       return document.getElementById("message").innerHTML = (`Both you and the computer has chosen ${int_to_rps[user_input]} it is a tie!`)
    }
    results = greater_variable - smaller_variable;
    if ((results == 1 && user_input == greater_variable) || (results == 2 && user_input == smaller_variable)){
         //1 for user 0 for com
        document.getElementById("message").innerHTML = (`user input ${int_to_rps[user_input]} computer input ${int_to_rps[com_input]} you have won`);
        return score_calc(1);
    } else if ((results == 1 && user_input == smaller_variable) || (results == 2 && user_input == greater_variable)){
        document.getElementById("message").innerHTML = (`user input ${int_to_rps[user_input]} computer input ${int_to_rps[com_input]} you have lost`);
        return score_calc(0)
    }
}

function random_input() {
    return parseInt(Math.random() * 3);
}
let user_score = 0;
let com_score = 0;
let button = document.getElementsByClassName("button");
console.log(button)

function score_calc(winner){
    if (user_score < 6 && com_score < 6){
        if (winner == 1){
            user_score++;
            return document.getElementById("user_score").innerHTML = user_score
        } else if (winner == 0){
            com_score++;
            return document.getElementById("com_score").innerHTML = com_score
        }
    } else{
        final_div.style.display = "block"
        if (user_score >= 6){
            document.getElementById("winner").innerHTML = "User";
        }if (com_score >= 6){
            document.getElementById("winner").innerHTML = "Computer";
        }
        for (let i = 0; i < button.length;i++){
            button[i].disabled = true; //this took me an hour LMAO WTF
        }
    }
}

function reset_game(){
    final_div.style.display = "none"
    for (let i = 0; i < button.length;i++){
        button[i].disabled = false
    }
    user_score = 0;
    com_score = 0;
    //im too tired to optimise this
    document.getElementById("user_score").innerHTML = 0;
    document.getElementById("com_score").innerHTML = 0;

