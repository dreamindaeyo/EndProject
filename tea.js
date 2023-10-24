function goDetail(event) {
  window.location = `./cafeDetail/teaDetail01.html?id=${event.id}`;
}
let teas = [
  {
    id: "tea01",
    type: 2,
    name: "Trà Vị Đào Tearoma 14x14g",
    price: "32.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669706771_bg-tradao-min_0eb7a1ea0cd642c2b6885970f85e4938_large.jpg",
    about:
      "Được chiết xuất từ 100% trà tự nhiên, không phẩm màu tổng hợp, Trà vị Đào Tearoma mang đến cảm giác thanh mát cực đã. Nhấp một ngụm, cảm nhận trọn vị đào chua ngọt thơm ngon bùng nổ. Ngoài ra, trà còn bổ sung vitamin C cực kỳ có lợi cho sức khoẻ.",
  },
  {
    id: "tea02",
    type: 2,
    name: "Trà Sữa Trân Châu Tearoma 250g",
    price: "38.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669880647_bg-trasua-min_ab66217f476e4b3295f8ad1c9e471f17_large.jpg",
    about:
      "Chỉ 2 phút có ngay ly Trà sữa trân châu ngon chuẩn vị quán. Thơm vị trà, béo vị sữa, cùng trân châu thật giòn dai sật sật. Đặc biệt, đây còn là thức uống tốt cho sức khoẻ nhờ thành phần 100% chiết xuất trà tự nhiên, không chất hoá học.",
  },
  {
    id: "tea03",
    type: 2,
    name: "Trà Vị Tắc Mật Ong Tearoma 14x14g",
    price: "32.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669706748_bg-tratatmatong-min_f2459a58cd724c1a91155a90d5481765_large.jpg",
    about:
      "Thổi bùng sảng khoái cùng Trà vị Tắc Mật Ong Tearoma không phẩm màu tổng hợp. Chiết xuất từ 100% trà tự nhiên, bổ sung vitamin C tốt cho sức khoẻ. Vị tắc chua chua hoà cùng mật ong ngọt dịu giúp bật vị giác, bừng vị mát tức thì.",
  },
  {
    id: "tea04",
    type: 2,
    name: "Trà Oolong Túi Lọc Tearoma 20x2G",
    price: "28.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639646968_tra-oolong-tui-loc-tearoma-20x2gr_6fcb0e4f8f654fd79ca2db0903760652_large.jpg",
    about:
      "Trà Oolong túi lọc với mùi hương dịu nhẹ hoàn toàn từ tự nhiên, vị hậu ngọt, và hương thơm tinh tế. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà,... nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
  },
  {
    id: "tea05",
    type: 2,
    name: "Trà Lài Túi Lọc Tearoma 20x2G",
    price: "28.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639647075_tra-lai-tui-loc-tearoma-20x2gr_7226dd7a930c48a1830463edfb393481_large.jpg",
    about:
      "Trà túi lọc Tearoma hương lài thơm tinh tế, thanh mát, trên nền trà xanh đậm đà khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà,.. nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
  },
  {
    id: "tea06",
    type: 2,
    name: "Trà Sen Túi Lọc Tearoma 20x2G",
    price: "28.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639648068_tra-sen-tui-loc-tearoma-20x2gr_6bfc6c11b6a64c6b8a29303ae53f562c_large.jpg",
    about:
      "Trà túi lọc Tearoma hương sen tinh tế, thanh mát, trên nền trà xanh đậm đà khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà, đi du lịch,... nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
  },
  {
    id: "tea07",
    type: 2,
    name: "Trà Đào Túi Lọc Tearoma 20x2G",
    price: "28.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639646846_tra-dao-tui-loc-tearoma-20x2gr_51dba126e55c45b9a05b7dcbc706edaa_large.jpg",
    about:
      "Trà túi lọc Tearoma hương đào với hương thơm tinh tế và hoàn toàn tự nhiên, cùng nền trà đen đậm vị khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà,.. nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
  },
  {
    id: "tea08",
    type: 2,
    name: "Giftset Trà Tearoma",
    price: "166.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1641440575_gift-set-tearoma-1_e793b698ba19496683d9e213b77a82c8_large.jpeg",
    about:
      "Hộp quà tặng với 4 hộp trà túi lọc Tearoma các loại là món quà thật ý nghĩa cho những người thân yêu.",
  },
];
const tratuilocproduct = document.querySelectorAll(".teaproducts");
tratuilocproduct.forEach((x, i) => {
  x.querySelector("img").setAttribute("src", teas[i].img);
  x.querySelector("img").setAttribute("id", teas[i].id);
  x.querySelector(".card-text").innerText = teas[i].name;
  x.querySelector(".price").innerText = teas[i].price;
});

const traDetail = teas.find(x => x.id == window.location.search.slice(4))
const teaDetail = document.querySelector('.main-detail')
teaDetail.querySelector('.detail-name').innerText = traDetail.name
teaDetail.querySelector('.detail-price').innerText = traDetail.price
teaDetail.querySelector('img').setAttribute("src", traDetail.img)
teaDetail.querySelector('img').setAttribute("alt", traDetail.name)
const teaDetail1 = document.querySelector('.bottom-detail')
teaDetail1.querySelector('.about-content').innerText = traDetail.about

function getRandom(list) {
    const res = []
    for (let x= 1; x<=3; x++) {
        const random = Math.floor(Math.random()* list.length);
        res.push(list[random])
    }
    return res
}
function getRandomElements(list, item = 6){
    return [...list].sort(() => Math.random()> 0.5 ? 1 : -1).slice(0,item)
}
const traArr = getRandomElements(teas, 6)
for(var i = 0; i <= 5; i++) {
  var trarandom = document.getElementById("tea0"+(i+1))
  console.log('document.querySelector(`#tea0${(i+1)} img`)', document.querySelector(`#tea0${(i+1)} img`));
  // document.querySelector(`#cafe0${(i+1)} img`).setAttribute('msp', traArr[i].img)
  trarandom.querySelector('.card-name').innerText = traArr[i].name;
  trarandom.querySelector('.card-price').innerText = traArr[i].price;
  trarandom.querySelector('img').setAttribute("src", traArr[i].img);
  trarandom.querySelector('img').setAttribute("alt", traArr[i].name);
  
}