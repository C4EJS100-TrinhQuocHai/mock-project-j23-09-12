// function đi mua hang
function addToCart(idProduct) {
    console.log(idProduct);
    let idUser=localStorage.getItem("idUser");
    let users= JSON.parse(localStorage.getItem("users"));
    let products=JSON.parse(localStorage.getItem("products"))||[];

    if(idUser!=null){
        /* cho đi mua hàng */
        /* lấy giỏ hàng của người đăng kí có id là idUser để đi mua hàng */
        for (let i = 0; i < users.length; i++) {
                if(users[i].id==idUser){
                    // giỏ hàng là users[i].cart
                    /* lấy sản phẩm để thêm vào giỏ hàng */
                    for (let j = 0; j < products.length; j++) {
                        if(products[j].id==idProduct){
                            /* có sản phẩm để thêm */
                            /* tiếp theo kiểm tra xem sản phẩm có trong giỏ hàng hay chưua */
                            let result=  users[i].cart.filter((item)=>{
                                return item.id==idProduct
                            })
                            if(result.length==0){
                                users[i].cart.push({...products[j],quantity:1});
                                localStorage.setItem("users",JSON.stringify(users));
                                myFunction("mua thành công!");
                                showQuantity()

                            }else{
                               for (let k = 0; k < users[i].cart.length; k++) {
                                    if(users[i].cart[k].id==idProduct){
                                        users[i].cart[k].quantity = ++users[i].cart[k].quantity;
                                        localStorage.setItem("users", JSON.stringify(users));
                                        myFunction("sản phẩm đã tăng số lượng");
                                        showQuantity()

                                        break;
                                    }
                               }
                            }
                            break;
                        }
                    }
                }
        }
       
    }else{
      myFunction("bạn chưa đăng nhập!")
    }
    
}
// function hiển thị số lượng sản phẩm trong giỏ hàng
function showQuantity() {

    let idUser = localStorage.getItem("idUser");
    let users = JSON.parse(localStorage.getItem("users"));

    if (idUser != null) {
        /* cho đi mua hàng */
        /* lấy giỏ hàng của người đăng kí có id là idUser để đi mua hàng */
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == idUser) {
                // giỏ hàng là users[i].cart
                /* lấy sản phẩm để thêm vào giỏ hàng */
                let total= users[i].cart.reduce((accumulator,valueIndex)=>{
                    return accumulator+valueIndex.quantity
                },0)
                document.getElementsByClassName("count")[0].innerHTML=total;
            }
        }

    } 
}
showQuantity()