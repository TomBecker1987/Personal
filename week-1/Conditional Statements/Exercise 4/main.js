const isVIP = false;
let cash = 500;

// if (isVIP == true) {
//     console.log("Please come in, sir.");
// }
// else if (cash>300) {
//     console.log("Please come in, sir.");
// }
// else {
//     console.log("Get lost, loser.");
// }

//ternary version

isVIP == true ? console.log("Please come in, sir.") :
 cash > 300 ? console.log("Please come in, sir.") : console.log("get lost, loser!");