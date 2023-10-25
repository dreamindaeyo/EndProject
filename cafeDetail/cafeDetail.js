let cafes = [
  {
    id: "cafe01",
    name: "Cà Phê Đen Đá Hộp (14 gói x 16g)",
    price: "58.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1697446954_ca-phe-den-da-hop_6728d463f06942a1b691c1d40af8b8bd_large.jpg",
    about:
      "Cà Phê Đen Đá hoà tan The Coffee House với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.",
  },
  {
    id: "cafe02",
    name: "Cà Phê Đen Đá Túi (30 gói x 16g)",
    price: "110.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1697446642_ca-phe-den-da-tui_931eaea80eee49bcb8bb731dce2fd0c4_large.jpg",
    about:
      "Cà Phê Đen Đá hoà tan The Coffee House với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.",
  },
  {
    id: "cafe03",
    name: "Thùng Cà Phê Sữa Espresso",
    price: "336.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669707271_24lon-espresso-no_8bebae682e4b479c951ddb16f483027e_large.jpg",
    about:
      "Được sản xuất theo công nghệ Nhật, Cà Phê Sữa Espresso The Coffee House giữ trọn hương vị đậm đà của 100% cà phê Robusta nguyên chất quyện hoà cùng sữa béo thơm lừng. Bật nắp trải nghiệm ngay chất cà phê mạnh mẽ giúp sảng khoái tức thì, tuôn trào hứng khởi.",
  },
  {
    id: "cafe04",
    name: "Combo 6 Lon Cà Phê Sữa Espresso",
    price: "84.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669707292_6lon-espresso-no_f3a81bf60969455db7f8082ce11a6a37_large.jpg",
    about:
      "Được sản xuất theo công nghệ Nhật, Cà Phê Sữa Espresso The Coffee House giữ trọn hương vị đậm đà của 100% cà phê Robusta nguyên chất quyện hoà cùng sữa béo thơm lừng. Bật nắp trải nghiệm ngay chất cà phê mạnh mẽ giúp sảng khoái tức thì, tuôn trào hứng khởi.",
  },
  {
    id: "cafe05",
    name: "Cà Phê Rang Xay Original 1 Túi 1KG",
    price: "235.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1684727946_photo-2023-05-22-105837_d02ab9e6538042b1adb392a97fb60dd2_large.jpeg",
    about:
      "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
  },
  {
    id: "cafe06",
    name: "Cà Phê Rang Xay Original 1 250g",
    price: "60.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_dad6e7c878df4207b49631eca111dbfd_large.jpg",
    about:
      "Cà phê Original 1 của The Coffee House với thành phần chính cà phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
  },
  {
    id: "cafe07",
    name: "Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)",
    price: "44.000 đ",
    img: "https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_689628f2b16b4792902ac107ae41bda3_large.jpg",
    about:
      "Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
  },
  {
    id: "cafe08",
    name: "Cà Phê Sữa Đá Hòa Tan Túi 25x22G",
    price: "99.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639648355_ca-phe-sua-da-hoa-tan-tui-25x22gr_527e9433f73c4f9da1ea398f2a94e8d2_large.jpg",
    about:
      "Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
  },
  {
    id: "cafe09",
    name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
    price: "48.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1639648313_ca-phe-sua-da-hoa-tan-dam-vi-viet_e99206e48a8f4e28b086556146165e05_large.jpg",
    about:
      "Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
  },
  {
    id: "cafe10",
    name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
    price: "99.000 đ",
    img: "https://product.hstatic.net/1000075078/product/1669707374_1642353251-ca-phe-dam-vi-viet-tui-new_8202f49602dd40ddac34ebb28e3145f8_large.jpg",
    about:
      "Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
  },
  {
    id: "cafe11",
    name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
    price: "84.000 đ",
    img: "https://product.hstatic.net/1000075078/product/p6-lon-3in1_717216_97953b669769475382c5b157f80f9e2a_large.jpg",
    about:
      "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
  },
  {
    id: "cafe12",
    name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
    price: "336.000 đ",
    img: "https://product.hstatic.net/1000075078/product/24-lon-cpsd_225680_2e56ba358a00410395c7baa175810a77_large.jpg",
    about:
      "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
  },
];
const capheDetail = cafes.find((x) => x.id == window.location.search.slice(4));
const cafeDetail = document.querySelector(".main-detail");
cafeDetail.querySelector(".detail-name").innerText = capheDetail.name;
cafeDetail.querySelector(".detail-price").innerText = capheDetail.price;
cafeDetail.querySelector("img").setAttribute("src", capheDetail.img);
cafeDetail.querySelector("img").setAttribute("alt", capheDetail.name);
const cafeDetail1 = document.querySelector(".bottom-detail");
cafeDetail1.querySelector(".about-content").innerText = capheDetail.about;

//    {
//     id: 1,
//     name: "cafe 01",
//     price: "31.000",
//     img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
// },
//   {
//     id: 2,
//     name: "cafe 02",
//       price: "32.000",
//     img: ""
// },
// {
//     id: 3,
//     name: "cafe 03",
//       price: "33.000",
//     img: ""
// },
// {
//     id: 4,
//     name: "cafe 04",
//       price: "34.000",
//     img: ""
// },
// {
//     id: 5,
//     name: "cafe 05",
//       price: "35.000",
//     img: ""
// },
// {
//     id: 6,
//     name: "cafe 06",
//       price: "36.000",
//     img: ""
// },
// {
//     id: 7,
//     name: "cafe 07",
//       price: "37.000",
//     img: ""
// },
// {
//     id: 8,
//     name: "cafe 08",
//       price: "38.000",
//     img: ""
// },
// ]
// var randomProperty = function (obj) {
//     var keys = Object.keys(obj);
//     return obj[keys[ keys.length * Math.random() << 0]];
// };
// console.log(randomProperty(cafe))

// var cafeName01 = document.getElementById("cafe01")
// cafeName01.innerText = randomProperty(cafe).name

function getRandom(list) {
  const res = [];
  for (let x = 1; x <= 3; x++) {
    const random = Math.floor(Math.random() * list.length);
    res.push(list[random]);
  }
  return res;
}
function getRandomElements(list, item = 6) {
  return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, item);
}

const capheArr = getRandomElements(cafes, 6);
const listElDetail = document.querySelectorAll(".card-detail");
for (var i = 0; i <= 5; i++) {
  var capherandom = listElDetail[i];
  capherandom.querySelector(".card-name").innerText = capheArr[i].name;
  capherandom.querySelector(".card-price").innerText = capheArr[i].price;
  capherandom.querySelector("img").setAttribute("src", capheArr[i].img);
  capherandom.querySelector("img").setAttribute("id", capheArr[i].id);
}
function goDetail(event) {
  window.location = `./cafeDetail01.html?id=${event.id}`;
}
