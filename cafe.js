// $(document).ready(function(){
//     $(".go-detail").click(function(){
//         window.location.href("./cafeDetail/cafeDetail01.html")
//     })
// })
let cafes = [
     { 
      id: 'cafe01',
      name: "Cà Phê Đen Đá Hộp (14 gói x 16g)",
      price: "58.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1697446954_ca-phe-den-da-hop_6728d463f06942a1b691c1d40af8b8bd_large.jpg",
      about: "Cà Phê Đen Đá hoà tan The Coffee House với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.",
   },
    { 
      id: 'cafe02',
      name: "Cà Phê Đen Đá Túi (30 gói x 16g)",
      price: "110.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1697446642_ca-phe-den-da-tui_931eaea80eee49bcb8bb731dce2fd0c4_large.jpg",
      about: "Cà Phê Đen Đá hoà tan The Coffee House với 100% hạt cà phê Robusta mang đến hương vị mạnh cực bốc, đậm đắng đầy lôi cuốn, đúng gu người Việt.",
   },
   { 
      id: 'cafe03',
      name: "Thùng Cà Phê Sữa Espresso",
      price: "336.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1669707271_24lon-espresso-no_8bebae682e4b479c951ddb16f483027e_large.jpg",
      about: "Được sản xuất theo công nghệ Nhật, Cà Phê Sữa Espresso The Coffee House giữ trọn hương vị đậm đà của 100% cà phê Robusta nguyên chất quyện hoà cùng sữa béo thơm lừng. Bật nắp trải nghiệm ngay chất cà phê mạnh mẽ giúp sảng khoái tức thì, tuôn trào hứng khởi.",
   },
    { 
      id: 'cafe04',
      name: "Combo 6 Lon Cà Phê Sữa Espresso",
      price: "84.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1669707292_6lon-espresso-no_f3a81bf60969455db7f8082ce11a6a37_large.jpg",
      about: "Được sản xuất theo công nghệ Nhật, Cà Phê Sữa Espresso The Coffee House giữ trọn hương vị đậm đà của 100% cà phê Robusta nguyên chất quyện hoà cùng sữa béo thơm lừng. Bật nắp trải nghiệm ngay chất cà phê mạnh mẽ giúp sảng khoái tức thì, tuôn trào hứng khởi.",
   },
   { 
      id: 'cafe05',
      name: "Cà Phê Rang Xay Original 1 Túi 1KG",
      price: "235.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1684727946_photo-2023-05-22-105837_d02ab9e6538042b1adb392a97fb60dd2_large.jpeg",
      about: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
   },
    { 
      id: 'cafe06',
      name: "Cà Phê Rang Xay Original 1 250g",
      price: "60.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_dad6e7c878df4207b49631eca111dbfd_large.jpg",
      about: "Cà phê Original 1 của The Coffee House với thành phần chính cà phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
   },
   { 
      id: 'cafe07',
      name: "Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)",
      price: "44.000 đ",
      img: "https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_689628f2b16b4792902ac107ae41bda3_large.jpg",
      about: "Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
   },
    { 
      id: 'cafe08',
      name: "Cà Phê Sữa Đá Hòa Tan Túi 25x22G",
      price: "99.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639648355_ca-phe-sua-da-hoa-tan-tui-25x22gr_527e9433f73c4f9da1ea398f2a94e8d2_large.jpg",
      about: "Thật dễ dàng để bắt đầu ngày mới với tách cà phê sữa đá sóng sánh, thơm ngon như cà phê pha phin. Vị đắng thanh của cà phê hoà quyện với vị ngọt béo của sữa, giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
   },
     { 
      id: 'cafe09',
      name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
      price: "48.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639648313_ca-phe-sua-da-hoa-tan-dam-vi-viet_e99206e48a8f4e28b086556146165e05_large.jpg",
      about: "Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
   },
    { 
      id: 'cafe10',
      name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
      price: "99.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1669707374_1642353251-ca-phe-dam-vi-viet-tui-new_8202f49602dd40ddac34ebb28e3145f8_large.jpg",
      about: "Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
   },
   { 
      id: 'cafe11',
      name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
      price: "84.000 đ",
      img: "https://product.hstatic.net/1000075078/product/p6-lon-3in1_717216_97953b669769475382c5b157f80f9e2a_large.jpg",
      about: "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
   },
    { 
      id: 'cafe12',
      name: "Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)",
      price: "336.000 đ",
      img: "https://product.hstatic.net/1000075078/product/24-lon-cpsd_225680_2e56ba358a00410395c7baa175810a77_large.jpg",
      about: "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
   },
   ];

let teas = [
{ 
      id: 'tea01',
      name: "Trà Vị Đào Tearoma 14x14g",
      price: "32.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1669706771_bg-tradao-min_0eb7a1ea0cd642c2b6885970f85e4938_large.jpg",
      about: "Được chiết xuất từ 100% trà tự nhiên, không phẩm màu tổng hợp, Trà vị Đào Tearoma mang đến cảm giác thanh mát cực đã. Nhấp một ngụm, cảm nhận trọn vị đào chua ngọt thơm ngon bùng nổ. Ngoài ra, trà còn bổ sung vitamin C cực kỳ có lợi cho sức khoẻ.",
   },
   { 
      id: 'tea02',
      name: "Trà Sữa Trân Châu Tearoma 250g",
      price: "38.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1669880647_bg-trasua-min_ab66217f476e4b3295f8ad1c9e471f17_large.jpg",
      about: "Chỉ 2 phút có ngay ly Trà sữa trân châu ngon chuẩn vị quán. Thơm vị trà, béo vị sữa, cùng trân châu thật giòn dai sật sật. Đặc biệt, đây còn là thức uống tốt cho sức khoẻ nhờ thành phần 100% chiết xuất trà tự nhiên, không chất hoá học.",
   },
   { 
      id: 'tea03',
      name: "Trà Vị Tắc Mật Ong Tearoma 14x14g",
      price: "32.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1669706748_bg-tratatmatong-min_f2459a58cd724c1a91155a90d5481765_large.jpg",
      about: "Thổi bùng sảng khoái cùng Trà vị Tắc Mật Ong Tearoma không phẩm màu tổng hợp. Chiết xuất từ 100% trà tự nhiên, bổ sung vitamin C tốt cho sức khoẻ. Vị tắc chua chua hoà cùng mật ong ngọt dịu giúp bật vị giác, bừng vị mát tức thì.",
   },
   { 
      id: 'tea04',
      name: "Trà Oolong Túi Lọc Tearoma 20x2G",
      price: "28.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639646968_tra-oolong-tui-loc-tearoma-20x2gr_6fcb0e4f8f654fd79ca2db0903760652_large.jpg",
      about: "Trà Oolong túi lọc với mùi hương dịu nhẹ hoàn toàn từ tự nhiên, vị hậu ngọt, và hương thơm tinh tế. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà,... nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
   },
   { 
      id: 'tea05',
      name: "Trà Lài Túi Lọc Tearoma 20x2G",
      price: "28.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639647075_tra-lai-tui-loc-tearoma-20x2gr_7226dd7a930c48a1830463edfb393481_large.jpg",
      about: "Trà túi lọc Tearoma hương lài thơm tinh tế, thanh mát, trên nền trà xanh đậm đà khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà,.. nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
   },
{ 
      id: 'tea06',
      name: "Trà Sen Túi Lọc Tearoma 20x2G",
      price: "28.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639648068_tra-sen-tui-loc-tearoma-20x2gr_6bfc6c11b6a64c6b8a29303ae53f562c_large.jpg",
      about: "Trà túi lọc Tearoma hương sen tinh tế, thanh mát, trên nền trà xanh đậm đà khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà, đi du lịch,... nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
   },{

      id: 'tea07',
      name: "Trà Đào Túi Lọc Tearoma 20x2G",
      price: "28.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1639646846_tra-dao-tui-loc-tearoma-20x2gr_51dba126e55c45b9a05b7dcbc706edaa_large.jpg",
      about: "Trà túi lọc Tearoma hương đào với hương thơm tinh tế và hoàn toàn tự nhiên, cùng nền trà đen đậm vị khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà,.. nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
   },
   { 
      id: 'tea01',
      name: "Giftset Trà Tearoma",
      price: "166.000 đ",
      img: "https://product.hstatic.net/1000075078/product/1641440575_gift-set-tearoma-1_e793b698ba19496683d9e213b77a82c8_large.jpeg",
      about: "Hộp quà tặng với 4 hộp trà túi lọc Tearoma các loại là món quà thật ý nghĩa cho những người thân yêu.",
   },
];

   const product = document.querySelectorAll('.products')
   product.forEach((x, i)=> {
     x.querySelector('img').setAttribute('src', cafes[i].img) 
     x.querySelector('img').setAttribute('id', cafes[i].id) 
     x.querySelector('.card-text').innerText = cafes[i].name
     x.querySelector('.price').innerText = cafes[i].price
   })
   const tratuilocproduct = document.querySelectorAll('.teaproducts')
   tratuilocproduct.forEach((x, i)=> {
     x.querySelector('img').setAttribute('src', teas[i].img) 
     x.querySelector('img').setAttribute('id', teas[i].id) 
     x.querySelector('.card-text').innerText = teas[i].name
     x.querySelector('.price').innerText = teas[i].price
   })

function goDetail(event){
     window.location = `./cafeDetail/cafeDetail01.html?id=${event.id}`;
}
