document.addEventListener('DOMContentLoaded', function(){


//location.reload()
//timerId = setInterval(clockImplementation, 1)
//location.reload()//clockImplementation()

var clockImplementation = {
  //now : new Date(),
  //hourNow : new Date().getHours(),
  //document.getElementById('hour').innerHTML
//console.log(hourNow)
  //minuteNow : new Date().getMinutes(),
  //document.getElementById('minute').innerHTML
  //secondNow : new Date().getSeconds(),
  // document.getElementById('second').innerHTML


clockFace : document.getElementById('clock'),
//console.log(clockFace)

minHand : document.getElementById('minute'),
//clockFace.appendChild(minHand)
hourHand : document.getElementById('hour'),
//clockFace.appendChild(hourHand)
secondHand : document.getElementById('second'),
//clockFace.appendChild(secondHand)

//console.log(secondHand)
//Move the second hand
//console.log("current time is "+ now)
// hourHand.style.transform = "rotate(" + hourRotation(hourNow)+ "deg)"
// minHand.style.transform = "rotate(" + minuteRotation(minuteNow)+ "deg)"
// secondHand.style.transform = "rotate(" + secondRotation(secondNow)+ "deg)"

minuteRotation: function(minuteValue)
{
  return (minuteValue/60)*360
},
hourRotation: function (hourValue, minuteValue){
  if (hourValue === 12)
  {
    return 0;
  }
  else
  {
  return ((hourValue/12)*360 + ((30/60)*minuteValue))
  }
},
secondRotation: function (secondValue){
  return (secondValue/60)*360
},
updateClock : function(){
  var now = new Date()
  var hourNow = now.getHours()
  var minuteNow = now.getMinutes()
  var secondNow = now.getSeconds()
  this.hourHand.style.transform = "rotate(" + this.hourRotation(hourNow, minuteNow)+ "deg)"
  this.minHand.style.transform = "rotate(" + this.minuteRotation(minuteNow)+ "deg)"
  this.secondHand.style.transform = "rotate(" + this.secondRotation(secondNow)+ "deg)"
}

}

document.getElementById('hour').innerHTML = clockImplementation.hourNow
document.getElementById('minute').innerHTML = clockImplementation.minuteNow
document.getElementById('second').innerHTML = clockImplementation.secondNow
clockImplementation.clockFace.appendChild(clockImplementation.hourHand)
clockImplementation.clockFace.appendChild(clockImplementation.minHand)
clockImplementation.clockFace.appendChild(clockImplementation.secondHand)
var timerId = setInterval(clockImplementation.updateClock.bind(clockImplementation), 1)

})
