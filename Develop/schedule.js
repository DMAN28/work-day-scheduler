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
// populates time formula into html
$(".block2").text(time2);
// 9 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
// Populates time formula into html
$(".block3").text(time3);
// 10 PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
// Populates time formula into html
$(".block4").text(time4);
// 11 AM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
// Populates time formula into html
$(".block5").text(time5);
// 12 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
// Populates time formula into html
$(".block6").text(time6);
// 1 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
// Populates time formula into html
$(".block7").text(time7);
// 2 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
// Populates time formula into html
$(".block8").text(time8);
// 3 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
// Populates time formula into html
$(".block9").text(time9);
// 4 PM
var time10 = beforeTime.add(1, "h");
time10 = time10.format('hh:mm A');
// Populates time formula into html
$(".block10").text(time10);
// 5 PM
var time11 = beforeTime.add(1, "h");
time11 = time11.format('hh:mm A');
// Populates time formula into html
$(".block11").text(time11);


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

