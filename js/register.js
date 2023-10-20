//function tạo id
function uuid() {
    return Math.floor(Math.random()*48489786545645)
}
// function đăng kí
function register(e) {
    // lấy dữ liệu trên local về
    let users=JSON.parse(localStorage.getItem("users"))||[];
    e.preventDefault();
    let userName= document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let info={
        name:userName,
        email:email,
        password:password,
        cart:[],
        id:uuid()
    }
    if(users.length==0){
        users.push(info);
        localStorage.setItem("users",JSON.stringify(users));
        myFunction("đăng kí thành công!");
        setTimeout(()=>{
            window.location.href = "../pages/login.html";
        },3500)
        return;
    }
   let result= users.filter((item)=>{
        return item.email==email;
   })
   // kết quả trả về của filter là 1 mảng.
   // có 2 TH: 1 là mảng rỗng , 2 mảng có chứ dữ liệu thoã mãn
    if(result.length==0){
        users.push(info);
        localStorage.setItem("users",JSON.stringify(users));
        myFunction("đăng kí thành công!");
        setTimeout(()=>{
            window.location.href = "../pages/login.html";
        },3500)
        
    }else{
        myFunction("tài khoản đã tồn tại!");
    }
}
