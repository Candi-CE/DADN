$(document).ready(function() {
  // Lắng nghe sự kiện submit của form
  $('form').submit(function(event) {
    // Ngăn chặn hành động mặc định của form
    event.preventDefault();

    // Lấy giá trị của select
    var selectedValue = $('#plant').val();

    // Kiểm tra xem giá trị đã chọn hay chưa
    if (selectedValue === "0") {
      alert('Vui lòng chọn loại cây trồng');
    } else {
      // Nếu đã chọn thì chuyển sang trang selectMode.html
      window.location.href = "index.html?auto="+ true +"&plant=" + selectedValue;
    }
  });
});
