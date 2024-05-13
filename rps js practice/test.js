// let answer = parseInt(prompt("Enter a number you would like to fuzzbuzz up to"))
// for (let i = 1; i <= answer;i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     } else if (i % 5 == 0){
//         console.log("Buzz");
//     } else if (i % 3 ){
//         console.log("Fizz")
//     } else {
//         console.log(i);
//     }
// }
// rock = 0 paper = 1 scissors = 2
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
        return document.getElementById("message"). innerHTML = (`user input ${int_to_rps[user_input]} computer input ${int_to_rps[com_input]} you have won`);
    } else if ((results == 1 && user_input == smaller_variable) || (results == 2 && user_input == greater_variable)){
        return document.getElementById("message").innerHTML = (`user input ${int_to_rps[user_input]} computer input ${int_to_rps[com_input]} you have lost`);}
}

function random_input() {
    return parseInt(Math.random() * 3);
}