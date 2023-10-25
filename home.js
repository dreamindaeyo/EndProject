//button scroll to top
let mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// button hotline
let show = document.getElementById("hotline");
let hide = document.getElementById("popbtn");
let popup = document.getElementById("popup");
show.addEventListener("click", function () {
  popup.style.display = "block";
});
hide.addEventListener("click", function () {
  popup.style.display = "none";
});

// ban chay va moi home
let homeproducts = [
  {
    id: "allproduct05",
    name: "Cà Phê Sữa Đá",
    price: "29.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_420319c0ee4d460a8dc5e287b951e405_large.png",
    about: "",
  },
  {
    id: "allproduct10",
    name: "Trà Đào Cam Xả",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736819_tra-dao-cam-sa-da_ce5fc8b77e204b71b8c28880c220f422_large.png",
    about: "",
  },
  {
    id: "allproduct13",
    name: "Trà Sữa OoLong Nướng Trân Châu",
    price: "55.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736877_tra-sua-oolong-nuong-tran-chau_ee56caa33ce3432e99571c302f0d6498_large.png",
    about: "",
  },
  {
    id: "allproduct18",
    name: "CloudFee Hạnh Nhân Nướng",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_5878cf79201a4742a022b038076b3c68_large.png",
    about: "",
  },
  {
    id: "allproduct21",
    name: "Hi-Tea Yuzu Trân Châu",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736859_hi-tea-yuzu-tran-chau_f72f9f2bb0934cb998a6674ad3f9da95_large.png",
    about: "",
  },
  {
    id: "allproduct22",
    name: "Hi-Tea Vải",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_06cc9054fb7e4cf5a56649703b9a8a51_large.png",
    about: "",
  },
  {
    id: "allproduct30",
    name: "Bánh Mì Gậy Gà Kim Quất",
    price: "25.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669737009_banh-mi-gay-ga-kim-quat_d8b14ee5a6714aa9add84af7f7ba223e_large.png",
    about: "",
  },
  {
    id: "allproduct32",
    name: "Chà Bông Phô Mai",
    price: "35.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736993_cha-bong-pho-mai_13d60efed56943649cb4122526feb85e_large.png",
    about: "",
  },
  {
    id: "allproduct01",
    name: "Phin Sữa Tươi Bánh Flan",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1696220170_phin-sua-tuoi-banh-flan_3d3873099d1a4de08335edc70f1cccc4_large.jpg",
    about: "",
  },
  {
    id: "allproduct02",
    name: "Trà Xanh Espresso Marble",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1696220139_tra-xanh-espresso-marble_6645d935c1b84d9aa4909c38a8560d6c_large.jpg",
    about: "",
  },
  {
    id: "allproduct24",
    name: "Trà Xanh Latte",
    price: "45.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1689778809_tx-latte_330c146458494687bb8ad69644fa3f91_large.jpg",
    about: "",
  },
  {
    id: "allproduct25",
    name: "Trà Xanh Đưòng Đen",
    price: "55.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1689778611_tx-duong-den_24fd0e886e7b4a7e97c84283932b6e2b_large.jpg",
    about: "",
  },
  {
    id: "allproduct26",
    name: "Frosty Trà Xanh",
    price: "59.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1689778505_tx-frosty_f68029bb7c88463cbb450f363eb6f0a4_large.jpg",
    about: "",
  },
  {
    id: "allproduct27",
    name: "Frosty Phin-Gato",
    price: "55.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1686021160_phin-gato-new_d3d5b5bd900d423c8548db3ca3518623_large.png",
    about: "",
  },
  {
    id: "allproduct28",
    name: "Frosty Cà Phê Đường Đen",
    price: "59.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1686021199_ca-phe-duong-den-new_ceddb459c0194acfabf609eb9fd85704_large.png",
    about: "",
  },
  {
    id: "allproduct29",
    name: "Frosty Bánh Kem Dâu",
    price: "59.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_7dcebeab9c47491fa867284a810106e8_large.jpg",
    about: "",
  },
];

const homeproduct = document.querySelectorAll(".home");
homeproduct.forEach((x, i) => {
  x.querySelector("img").setAttribute("src", homeproducts[i].img);
  x.querySelector("img").setAttribute("alt", homeproducts[i].name);
  x.querySelector("img").setAttribute("id", homeproducts[i].id);
  x.querySelector(".item_name").innerHTML = homeproducts[i].name;
  x.querySelector(".price_product_item").innerHTML = homeproducts[i].price;
});

function goDetail(event) {
  window.location = `./cafeDetail/allproductDetail01.html?id=${event.id}`;
}
