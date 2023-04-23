$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault(); // ngăn form submit mặc định
    var gio = parseInt($('#gio').val());
    var phut = parseInt($('#phut').val());
    var giay = parseInt($('#giay').val());
    var totalSeconds = gio*3600 + phut*60 + giay;
    if (isNaN(totalSeconds) || totalSeconds <= 0 || totalSeconds >= 86400 || isNaN(gio) || isNaN(phut) || isNaN(giay) || gio < 0 || gio > 23 || phut < 0 || phut > 59 || giay < 0 || giay > 59) {
      alert("Thời gian không hợp lệ, vui lòng nhập lại!");
    } else {
      window.location.href = "index.html?auto="+ false + "&time=" + totalSeconds;
    }
  });
});
