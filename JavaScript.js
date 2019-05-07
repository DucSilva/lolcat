var wakeuptime = 7;
var noon =12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//Getting it to show the current time on the page
var showCurrentTime = function(){
    //display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Set Hours
    if(hours >= noon){
        meridian = "PM";
    }
    if(hours > noon){
        hours = hours -12;
    }

    //Set minutes
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    //Set seconds
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    //Put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + "" + meridian + "!";
    
    clock.innerHTML = clockTime;
}

//Getting  the clock to increment on its own and  change  out messages  and pictures
var updateClock = function(){
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var lolCatImageJS = document.getElementById('lolcatImage');

    if(time == partytime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's Party!";
    }
    else if(time == lunchtime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }
    else if(time == naptime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!"
    }
    else if(time < noon){
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    }
    else if(time >= evening){
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good Evening!";
    }
    else{
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good Afternoon";
    }
    console.log(messageText);
    timeEventJS.innerHTML = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

//Getting the clock to incremnet once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Getting the Party Time Button to Work
var btnParty = document.getElementById('btnPartyTime');
var partyEvent = function(){
    if(partytime < 0){
        partytime = new Date().getHours();
        btnPartyTime.innerText = "Party Over!";
        btnPartyTime.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        btnPartyTime.innerText = "Party Time!";
        btnPartyTime.style.backgroundColor = "#222";
    }
};
btnParty.addEventListener("click", partyEvent);
partyEvent();

//Activates Wake-Up Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function(){
    wakeuptime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Activates Lunch Selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function(){
    lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

//Activates Nap-time seletor
var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function(){
    naptime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);