
// Trang Chủ 1
// xử lí đăng nhập
$(document).ready(function () {
    // Xử lí khi form được submit
    $("#login").submit(function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định

        // Lấy giá trị từ các trường input
        var email = $("#exampleInputEmail1").val();
        var password = $("#exampleInputPassword1").val();
        var isChecked = $("#exampleCheck1").is(":checked");

        //ktra form
        if (!isChecked) {
            $("#checkboxError").text("Vui lòng đánh dấu vào ô này.");
            return false;
        } else {
            $("#checkboxError").text("");
            return false;
        }

        if (email === "ERD@gmail.com" && password === "123456") {

            window.location.href = "TrangChu2.html";
        } else {
            $("#passwordError").text("Sai tên đăng nhập hoặc mật khẩu");
            $("#emailError").text("Sai tên đăng nhập hoặc mật khẩu");


        }
    });
});

// xử lí form đăng kí 
$(document).ready(function () {


    var checksignupAccount = function () {
        if ($("#signupAccount").val() == "") {
            $("#signupAccountErr").html("Vui lòng điền tên đăng nhập");
            return false;
        } else {
            $("#signupAccountErr").html("");
            return true;
        }
    };

    var checksignupPassword = function () {
        if ($("#signupPassword").val() == "") {
            $("#signupPasswordErr").html("Vui lòng nhập mật khẩu!");
            return false;
        } else if ($("#signupPassword").val().length < 6) {
            $("#signupPasswordErr").html("Mật khẩu phải dài hơn 6 kí tự");
            return false;
        } else {
            $("#signupPasswordErr").html("");
            return true;
        }
    };

    var checkconfrmPassword = function () {
        if ($("#confirmPassword").val() == "") {
            $("#confirmPasswordErr").html("Vui lòng xác nhận mật khẩu");
            return false;
        } else if ($("#confirmPassword").val() !== $("#signupPassword").val()) {
            $("#confirmPasswordErr").html("Xác nhận mật khẩu không đúng");
            return false;
        } else {
            $("#confirmPasswordErr").html("");
            return true;
        }
    };

    var checkphoneNumber = function () {
        var btcqSDT = /^(03|09|07)[0-9]{8}$/;
        if ($("#confirmationPhoneNumber").val() == "") {
            $("#confirmationPhoneNumberErr").html("Vui lòng nhập số điện thoại xác nhận");
            return false;
        } else if (btcqSDT.test($("#confirmationPhoneNumber").val())) {
            $("#confirmationPhoneNumberErr").html("");
            return true;
        } else {
            $("#confirmationPhoneNumberErr").html("Số điện thoại gồm 10 số và bắt đầu là 03 09 hoặc 07");
            return false;
        }
    };

    $("#signupAccount").blur(checksignupAccount);
    $("#signupPassword").blur(checksignupPassword);
    $("#confirmPassword").blur(checkconfrmPassword);
    $("#confirmationPhoneNumber").blur(checkphoneNumber);

    // Xử lí khi form được submit
    $("#signup_form").submit(function (event) {
        event.preventDefault();
        var isChecked = $("#agreeCheckbox").is(":checked");
        if (!isChecked) {
            $("#agreeCheckboxErr").text("Bạn có đồng ý với điều khoản của chúng tôi");
            return;
        } else {
            $("#agreeCheckboxErr").text("");
        }

        if (!checksignupAccount() || !checksignupPassword() || !checkconfrmPassword() || !checkphoneNumber() || !isChecked) {
            return;
        } else {
            // Nếu tất cả điều kiện kiểm tra đúng,chuyển về trang chủ
            window.location.href = "Trangchu.html";
        }

    });
});











//xử lí header các trang
$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() < 1025) {
            $("#Search-login-md").hide();
        } else {
            $("#Search-login-md").show();
        }

    });
});

$(document).ready(function () {
    $('#avatar').click(function () {
        $('#info-box').toggleClass('d-none');
    });
});

$(document).ready(function () {
    $('#avatar-sm').click(function () {
        $('#info-box-sm').toggleClass('d-none');
    });
});



//History search 
$(document).ready(function () {
    $('#header-search').focus(function () {
        $('#info-history-serach').removeClass('d-md-none');
    });

    $('#header-search').blur(function () {
        $('#info-history-serach').addClass('d-md-none');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var searchLoginAdded = false;

    function addSearchLogin() {
        $("#brand").after('<div id="Search-login-mb">' +
            '<div class="d-flex flex-row align-items-end align-items-md-center align-content-md-center ali">' +
            '<form class="d-flex" role="search">' +
            '<input class="form-control float-sm-start me-3 header-search-size" type="search" placeholder="Nhập tên phim" aria-label="Search">' +
            '<button class="btn btn-outline-info" type="submit">Tìm Kiếm</button>' +
            '</form>' +
            '</div>' +
            '</div>');
        searchLoginAdded = true;
    }

    function removeSearchLogin() {
        $("#Search-login-mb").remove();
        searchLoginAdded = false;
    }

    function checkWindowWidth() {
        if ($(window).width() < 1025 && !searchLoginAdded) {
            addSearchLogin();
        } else if ($(window).width() >= 1025 && searchLoginAdded) {
            removeSearchLogin();
        }
    }

    $(window).resize(checkWindowWidth);

    // Gọi hàm kiểm tra ngay khi trang được tải
    checkWindowWidth();
});





// Form đăng kí




