
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("v");
}
// sayMyName()              (referance & exicute)

function addTwoNumbers(number1,number2){
    // console.log(number1+number2); 
    return number1+number2                  //important information 
}
addTwoNumbers(3,4)
const result = addTwoNumbers(3,5)
console.log(result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return`${username}justLoggedIn`
}
// console.log(loginUserMessage("Abhinav"))
console.log(loginUserMessage());

