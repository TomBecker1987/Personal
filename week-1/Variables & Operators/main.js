let isVIP = Boolean(prompt("Are you a VIP? true or false.."))
let cash = Number(prompt("How much cash have you got?"))

if (isVIP == true) {
    console.log("Please come in, sir.");
}
else if (cash <= 300) {
    console.log("Please come in sir.");
}
else {
    console.log("Sorry, losers are not allowed.");
}