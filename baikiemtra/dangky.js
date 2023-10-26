const dangky = () => {
    if (
        document.getElementById("dangkytaikhoan").value === "" 
        || document.getElementById("matkhaudangky").value === ""
        || document.getElementById("email").value === ""
    ){
        alert("Tên đăng nhập và mật khẩu không được để trống")
    }else {
        let email = document.getElementById("email").value
        let tenDangKy = document.getElementById("dangkytaikhoan").value
        let pwDangKy = document.getElementById("matkhaudangky").value 
        localStorage.setItem('email', email)
        localStorage.setItem("ten nguoi dung", tenDangKy)
        localStorage.setItem("password", pwDangKy)

        document.getElementById("email").value === ""
        document.getElementById("dangkytaikhoan").value = ""
        document.getElementById("matkhaudangky").value = ""
        alert("dangkythanhcong")
        window.location.href="show.html";
    }
}