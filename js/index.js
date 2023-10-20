let banhMys = [
    {
        image: "./assets/images/cake1.jpg",
        name: "bánh mì sài gòn",
        price: "5000",
        description: "thơm ngon mời bạn ăn nha",
        id: "284887878"
    },
    {
        image: "./assets/images/cake2.jpg",
        name: "bánh mì hà nọi",
        price: "5500",
        description: "thơm ngon mời bạn ăn nha",
        id: "2898999558"
    },
    {
        image: "./assets/images/cake3.jpg",
        name: "bánh mì trứng",
        price: "6000",
        description: "thơm ngon mời bạn ăn nha",
        id: "88794518545"
    },
    {
        image: "./assets/images/cake4.jpg",
        name: "bánh mì thịt",
        price: "7000",
        description: "thơm ngon mời bạn ăn nha",
        id: "87897451"
    },
    {
        image: "./assets/images/cake5.jpg",
        name: "bánh mì đặc biệt",
        price: "15000",
        description: "thơm ngon mời bạn ăn nha",
        id: "752154154"
    },
    {
        image: "./assets/images/cake6.jpg",
        name: "bánh mì xá xíu",
        price: "11000",
        description: "thơm ngon mời bạn ăn nha",
        id: "84894511652"
    }
]
localStorage.setItem("products", JSON.stringify(banhMys));
// function hiển thị user 
function showUser() {
    let idUser=localStorage.getItem("idUser");
    if(idUser!=null){
        document.getElementsByClassName("header__user")[0].style.display="block";
        document.getElementsByClassName("header__login")[0].style.display = "none";
        document.getElementsByClassName("header__login")[1].style.display = "none";
    }
}
showUser();
function showBanhMy() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let text = "";
    for (let i = 0; i < products.length; i++) {
        text +=
            `
                <div class="products__item">
                    <p class="products__item--image"><img src="${products[i].image}" alt=""></p>
                    <p>${products[i].name}</p>
                    <p>Giá :${VND.format(products[i].price)}</p>
                    <button class="buy" onclick=addToCart(${products[i].id})>thêm vào giỏ</button>
                </div>
            `

    }
    document.getElementsByClassName("products")[0].innerHTML = text;
}
showBanhMy()
