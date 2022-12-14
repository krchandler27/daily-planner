var currentHour = dayjs().hour();
var hourId = localStorage.getItem("key")

function updateTime() {
  var currentDate = dayjs().format('MMM D, YYYY, hh:mm A');
  $('#currentDay').text(currentDate);
}

updateTime();

setInterval(updateTime, 60000);

function colorCode() {
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
  })
}

colorCode();

$(".saveBtn").each(function () {
  $(this).on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val();
    localStorage.setItem(key, value);
  })
})

for (let i = 5; i <= 22; i++) {
  var storedLS = localStorage.getItem("hour-" + i);
  $("#hour-" + i).children("textarea").val(storedLS);
}

$("#clearAll").on("click", function () {
  localStorage.clear();
  location.reload();
})