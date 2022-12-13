var currentHour = dayjs().hour();
var saveBtns = $(".savebtn");
var description = $(".description").text;

function updateTime() {
  var currentDate = dayjs().format('MMM D, YYYY, hh:mm A');
  $('#currentDay').text(currentDate);
}

updateTime();

setInterval(updateTime, 60000);

$('.hour').each(function () {

  if (($(this).text()) < currentHour) {
    $(this).parent().parent().addClass("past");
  }
  if (($(this).text()) == currentHour) {
    $(this).parent().parent().addClass("present");
  }
  if (($(this).text()) > currentHour) {
    $(this).parent().parent().addClass("future");
  }
});

// function saveData() {

// }

$(".saveBtn").each(function () {
  $(this).on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val();
    localStorage.setItem(key, value);
  })
})

