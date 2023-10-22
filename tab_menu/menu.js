//dropdown side bar
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i=0; i < dropdown.length; i++){
    dropdown[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display ==="block"){
            dropdownContent.style.display = "none";
        } else{
            dropdownContent.style.display = "block";
        }
    });
}

//san pham
let procafes = [
{
    id: "cafedrink01",
    name: "Phin Sữa Tươi Bánh Flan",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1696220170_phin-sua-tuoi-banh-flan_348e4d8886cc49cb968799018001c6fb_large.jpg",
    about: "Tỉnh tức thì cùng cà phê Robusta pha phin đậm đà và bánh flan núng nính. Uống là tỉnh, ăn là dính, xứng đáng là highlight trong ngày của bạn.",
},
{
    id: "cafedrink02",
    name: "Trà Xanh Espresso Marble",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1696220139_tra-xanh-espresso-marble_492d249bb3ab498496bff16663d9649b_large.jpg",
    about: "Cho ngày thêm tươi, tỉnh, êm, mượt với Trà Xanh Espresso Marble. Đây là sự mai mối bất ngờ giữa trà xanh Tây Bắc vị mộc và cà phê Arabica Đà Lạt. Muốn ngày thêm chút highlight, nhớ tìm đến sự bất ngờ này bạn nhé!",
},
{
    id: "cafedrink03",
    name: "Đường Đen Sữa Đá",
    price: "45.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1686716532_dd-suada_4f2bf8d7f1af4f408500d6d85e150582_large.jpg",
    about: "Nếu chuộng vị cà phê đậm đà, bùng nổ và thích vị đường đen ngọt thơm, Đường Đen Sữa Đá đích thị là thức uống dành cho bạn. Không chỉ giúp bạn tỉnh táo buổi sáng, Đường Đen Sữa Đá còn hấp dẫn đến ngụm cuối cùng bởi thạch cà phê giòn dai, nhai cực cuốn. - Khuấy đều trước khi sử dụng",
},
{
    id: "cafedrink04",
    name: "The Coffee House Sữa Đá",
    price: "39.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_f3d8150a7b2744e68c7215ff13c0fe96_large.jpg",
    about: "Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.",
},
{
    id: "cafedrink05",
    name: "Cà Phê Sữa Đá",
    price: "29.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_841285ad62c2440fb7ab03a5b3b6404d_large.png",
    about: "Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
},
{
    id: "cafedrink06",
    name: "Bạc Sỉu",
    price: "29.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_2ec66781492d4bb0aa7acb48ef9a1742_large.jpg",
    about: "Bạc sỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
},
{
    id: "cafedrink07",
    name: "Cà Phê Đen Đá",
    price: "29.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_64a5cacc17d949be995fd0cbe7cb14f9_large.jpg",
    about: "Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.",
},
{
    id: "cafedrink08",
    name: "Cà Phê Sữa Đá Chai Fresh 250ML",
    price: "75.000 đ",
    img: "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_4b7d5ae89d07453b804ee2375ab770ce_large.jpg",
    about: "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
},
];

let proteas = [
{
    id: "teadrink01",
    name: "Trà Long Nhãn Hạt Sen",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1649378747_tra-sen-nhan_01472713cfef4b8fb7fb4a90efeadd39_large.jpg",
    about: "Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.",
},
{
    id: "teadrink02",
    name: "Trà Đào Cam Sả - Đá",
    price: "49.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669736819_tra-dao-cam-sa-da_c0a2708af2a249f6a8df029a3faef564_large.png",
    about: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
},
{
    id: "teadrink03",
    name: "Trà Đào Cam Sả Chai Fresh 500ML",
    price: "105.000 đ",
    img: "https://product.hstatic.net/1000075078/product/bottle_tradao_836487_73425d2bcd244d88918412052e15022e_large.jpg",
    about: "Với phiên bản chai fresh 500ml, thức uống best seller đỉnh cao mang một diện mạo tươi mới, tiện lợi, phù hợp với bình thường mới và vẫn giữ nguyên vị thanh ngọt của đào, vị chua dịu của cam vàng nguyên vỏ và vị trà đen thơm lừng ly Trà đào cam sả nguyên bản. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
},
{
    id: "teadrink04",
    name: "",
    price: ".000 đ",
    img: "",
    about: "",
},
{
    id: "teadrink05",
    name: "",
    price: ".000 đ",
    img: "",
    about: "",
},
{
    id: "teadrink06",
    name: "",
    price: ".000 đ",
    img: "",
    about: "",
},
];

const cafeproduct = document.querySelectorAll(".cafedrink");
cafeproduct.forEach((x,i) => {
    x.querySelector("img").setAttribute("scr", procafes[i].img);
    x.querySelector("img").setAttribute("alt", procafes[i].name);
    x.querySelector("img").setAttribute("id", procafes[i].id);
    x.querySelector(".item_name").innerHTML = procafes[i].name;
    x.querySelector(".price_product_item").innerHTML = procafes[i].price;
})

const teaproduct = document.querySelectorAll(".teadrink");
teaproduct.forEach((x,i) => {
    x.querySelector("img").setAttribute("scr", proteas[i].img);
    x.querySelector("img").setAttribute("alt", proteas[i].name);
    x.querySelector("img").setAttribute("id", proteas[i].id);
    x.querySelector(".item_name").innerHTML = proteas[i].name;
    x.querySelector(".price_product_item").innerHTML = proteas[i].price;
})