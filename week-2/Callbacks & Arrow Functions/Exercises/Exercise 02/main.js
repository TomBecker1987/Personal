let time = new Date()

const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  

const getTime = function (t,time) {
    t(time)
}
  
getTime(returnTime, time)