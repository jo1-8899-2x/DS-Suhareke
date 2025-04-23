var wakeuptime
var dstime
var sleeptime
var noon = 12;


function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM"

    if(hours >= noon){
        meridian = "PM"

    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText + clockTime;
    changeImage();

};
var oneSecond = 1000;

setInterval(showCurrentTime, oneSecond);

function changeImage (){
    var time = new Date().getHours();
    console.log(time);

    var image = "ds_clock.png"
    var imageHTML= document.getElementById("timeImage");

    if(time == wakeuptime) {
        images = "morning.gif";
        console.log("morning");
    }
    else if (time == dstime) {
        images = "school.png"
    }
    else if (time == sleepTime){
        images = "bunny.gif.gif"
    }
    imageHTML.src = image;
    console.log(imageHTML.src);
}
function updateClock(){
    var wakeuptimeSelector = document.getElementById('wakeUpTimeSelector');
    wakeuptime=wakeuptimeSelector.value;

var dsTimeSelector = document.getElementById('wakeUpTimeSelector');
dstime = dsTimeSelector.value;

var sleepTimeSelector = document.getElementById('dsTimeSelector');
sleepTime = sleepTimeSelector.value;

}
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click",updateClock);
