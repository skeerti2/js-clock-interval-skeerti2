document.addEventListener('DOMContentLoaded', function(){


//location.reload()
timerId = setInterval(clockImplementation, 1000)
//location.reload()//clockImplementation()

function clockImplementation() {
  var now = new Date()
var hourNow = document.getElementById('hour').innerHTML = now.getHours();
//console.log(hourNow)
var minuteNow = document.getElementById('minute').innerHTML = now.getMinutes();
var secondNow = document.getElementById('second').innerHTML = now.getSeconds();


var clockFace = document.getElementById('clock')
//console.log(clockFace)

var minHand = document.getElementById('minute')
clockFace.appendChild(minHand)
var hourHand = document.getElementById('hour')
clockFace.appendChild(hourHand)
var secondHand = document.getElementById('second')
clockFace.appendChild(secondHand)

//console.log(secondHand)
//Move the second hand
console.log("current time is "+ now)
hourHand.style.transform = "rotate(" + hourRotation(hourNow)+ "deg)"
minHand.style.transform = "rotate(" + minuteRotation(minuteNow)+ "deg)"
secondHand.style.transform = "rotate(" + secondRotation(secondNow)+ "deg)"

function minuteRotation(minuteValue)
{
  return (minuteValue/60)*360
}
function hourRotation(hourValue){
  if (hourValue === 12)
  {
    return 0;
  }
  else
  {
  return ((hourValue/12)*360 + ((30/60)*minuteNow))
  }
}
function secondRotation(secondValue){
  return (secondValue/60)*360
}

}
})
