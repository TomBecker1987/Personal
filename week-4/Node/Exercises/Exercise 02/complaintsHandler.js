let consts = require('./consts')

let handleComplaints = function (complaint) {
     if (complaint.type == consts.finance ) {
       console.log("Money doesn't grow on trees, you know.")
    }
     if (complaint.type == consts.weather ) {
       console.log("It is the way of nature. Not much to be done.")
    }
     if (complaint.type == consts.emotions ) {
       console.log("It'll pass, as all things do, with time..")
    }
}

module.exports.handleComplaints = handleComplaints