$("#div").data().barcode = "311192"
$("#div").data().expirationDate = "18-02-2030"

let dataObj = $("#div").data() 
let barcode = dataObj.barcode
let expirationDate = dataObj.expirationDate

console.log(`The item with barcode ${barcode} will expire on ${expirationDate}`)