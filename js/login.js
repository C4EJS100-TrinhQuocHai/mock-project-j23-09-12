/* chức năng login tài khoản */
function login() {
    //lấy dữ liệu ở trên local về
    let  users= JSON.parse(localStorage.getItem("users"))||[];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    for (let i = 0;  i< users.length; i++) {
       if(users[i].email==email && users[i].password==password){
        myFunction("đăng nhập thành công!");
        localStorage.setItem("idUser",users[i].id);
        setTimeout(()=>{
            window.location.href = "../index.html";
        },3500)
        return;
       }
    }
    myFunction("đăng nhập sai email hoặc mật khẩu!");
}