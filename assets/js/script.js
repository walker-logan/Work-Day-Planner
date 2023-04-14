var timeDisplayEl = $("#currentDay");
function displayTime() {
  var rightNow = dayjs().format(
    "[Current Date & Time:] MMM DD, YYYY [ at ] hh:mm:ss a"
  );
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);

$(".saveBtn").click(function () {
  console.log(this);
  var description = $(this).siblings(".description").val();
  var rowTime = $(this).parent().attr("id");

  localStorage.setItem(rowTime, description);
});

$(".time-block").each(function () {
  var currentTime = dayjs().hour();
  var rowHour = parseInt($(this).attr("id").split("-")[1]);
  if (rowHour === currentTime) {
    $(this).addClass("present");
  } else if (rowHour > currentTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

for (i = 9; i < 18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}
