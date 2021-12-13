//current day is displayed at
// moment declaration for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// current time 
var currentTime = moment();
// returns current time to the nearest hour 7:30 becomes 7:00
currentTime = currentTime.startOf("hour");
// calculate the start of day 
var beforeTime = moment().startOf('day').add(7, "hours");


//timeblocks for day color coded to indicate whether it is  the past, present, or future

//timeblocks
// 7 AM 
var time1 = beforeTime.add(0, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// populates time formula into html
$(".block1").text(time1);
// 8 AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block2").text(time2);


function testTime() {
    // Add time1 7AM
    time1 = moment().startOf('day').add(7, "hours");
    //current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time1 if/else
    if (currentTime.isAfter(time1)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form1").addClass("present");
    };
    // Add time2 8AM
    time2 = moment().startOf('day').add(8, "hours");
    // Add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form2").addClass("present");
    };

    
}

