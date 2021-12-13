//current day is displayed at
// moment declaration for day and time 
moment(undefined);
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
    // add time 1 7AM
    time1 = moment().startOf('day').add(7, "hours");
    //current time to the hour
    currentTime = currentTime.startOf("hour");
    // add time 1 if/else
    if (currentTime.isAfter(time1)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form1").addClass("present");
    };
    // add time 2 8AM
    time2 = moment().startOf('day').add(8, "hours");
    // add time 2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form2").addClass("present");
    };
    // add time 3 9AM
    time2 = moment().startOf('day').add(8, "hours");
    // add time 3 if/else
    if (currentTime.isAfter(time2)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form3").addClass("present");
    };
    // time 4 10AM
    time4 = moment().startOf('day').add(10, "hours");
    // add time 4 if/else
    if (currentTime.isAfter(time4)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form4").addClass("present");
    };
    // time 5 11AM
    time5 = moment().startOf('day').add(11, "hours");
    // add time 5 if/else
    if (currentTime.isAfter(time5)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form5").addClass("present");
    };
    // time6 12PM
    time6 = moment().startOf('day').add(12, "hours");
    // add time 6 if/else
    if (currentTime.isAfter(time6)) {
        $(".form6").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form6").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form6").addClass("present");
    };
    // time 7 1PM
    time7 = moment().startOf('day').add(13, "hours");
    // add time 7 if/else
    if (currentTime.isAfter(time7)) {
        $(".form7").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form7").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form7").addClass("present");
    };
    // time 8 2PM
    time8 = moment().startOf('day').add(14, "hours");
    // add time 8 if/else
    if (currentTime.isAfter(time8)) {
        $(".form8").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form8").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form8").addClass("present");
    };
    // time 9 3PM
    time9 = moment().startOf('day').add(15, "hours");
    // Add time 9 if/else
    if (currentTime.isAfter(time9)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form9").addClass("present");
    };
    // time 10 4PM
    time10 = moment().startOf('day').add(16, "hours");
    // add time 10 if/else
    if (currentTime.isAfter(time10)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form10").addClass("present");
    };
    // time 11 5PM
    time11 = moment().startOf('day').add(17, "hours");
    // add time 11 if/else
    if (currentTime.isAfter(time11)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".form11").addClass("present");
    };

}

testTime();
// for loop to get item from local storage
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
// for loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}
// event listener to save to 
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

