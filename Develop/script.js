var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm a'));

console.log(today);

var saveBtn = $(".saveBtn");


saveBtn.on("click", function() {
 
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});


function thwomps() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


function scheduleRequest() {

    $(".hour").each(function() {
        var timeFrame = $(this).text();
        var schedule = localStorage.getItem(timeFrame);

        if(schedule !== null) {
            $(this).siblings(".plan").val(schedule);
        }
    });
}

scheduleRequest();
thwomps();




