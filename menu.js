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

function goDetail(event) {
  window.location = `./cafeDetail/allproductDetail01.html?id=${event.id}`;
}
// menu tat ca san pham
// let procafes = [
//   {
//     id: "cafedrink01",
//     name: "Phin Sữa Tươi Bánh Flan",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1696220170_phin-sua-tuoi-banh-flan_348e4d8886cc49cb968799018001c6fb_large.jpg",
//     about:
//       "Tỉnh tức thì cùng cà phê Robusta pha phin đậm đà và bánh flan núng nính. Uống là tỉnh, ăn là dính, xứng đáng là highlight trong ngày của bạn.",
//   },
//   {
//     id: "cafedrink02",
//     name: "Trà Xanh Espresso Marble",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1696220139_tra-xanh-espresso-marble_492d249bb3ab498496bff16663d9649b_large.jpg",
//     about:
//       "Cho ngày thêm tươi, tỉnh, êm, mượt với Trà Xanh Espresso Marble. Đây là sự mai mối bất ngờ giữa trà xanh Tây Bắc vị mộc và cà phê Arabica Đà Lạt. Muốn ngày thêm chút highlight, nhớ tìm đến sự bất ngờ này bạn nhé!",
//   },
//   {
//     id: "cafedrink03",
//     name: "Đường Đen Sữa Đá",
//     price: "45.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1686716532_dd-suada_4f2bf8d7f1af4f408500d6d85e150582_large.jpg",
//     about:
//       "Nếu chuộng vị cà phê đậm đà, bùng nổ và thích vị đường đen ngọt thơm, Đường Đen Sữa Đá đích thị là thức uống dành cho bạn. Không chỉ giúp bạn tỉnh táo buổi sáng, Đường Đen Sữa Đá còn hấp dẫn đến ngụm cuối cùng bởi thạch cà phê giòn dai, nhai cực cuốn. - Khuấy đều trước khi sử dụng",
//   },
//   {
//     id: "cafedrink04",
//     name: "The Coffee House Sữa Đá",
//     price: "39.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_f3d8150a7b2744e68c7215ff13c0fe96_large.jpg",
//     about:
//       "Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.",
//   },
//   {
//     id: "cafedrink05",
//     name: "Cà Phê Sữa Đá",
//     price: "29.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_841285ad62c2440fb7ab03a5b3b6404d_large.png",
//     about:
//       "Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
//   },
//   {
//     id: "cafedrink06",
//     name: "Bạc Sỉu",
//     price: "29.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_2ec66781492d4bb0aa7acb48ef9a1742_large.jpg",
//     about:
//       "Bạc sỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
//   },
//   {
//     id: "cafedrink07",
//     name: "Cà Phê Đen Đá",
//     price: "29.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_64a5cacc17d949be995fd0cbe7cb14f9_large.jpg",
//     about:
//       "Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.",
//   },
//   {
//     id: "cafedrink08",
//     name: "Cà Phê Sữa Đá Chai Fresh 250ML",
//     price: "75.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_4b7d5ae89d07453b804ee2375ab770ce_large.jpg",
//     about:
//       "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
//   },
// ];

// let proteas = [
//   {
//     id: "teadrink01",
//     name: "Trà Long Nhãn Hạt Sen",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1649378747_tra-sen-nhan_01472713cfef4b8fb7fb4a90efeadd39_large.jpg",
//     about:
//       "Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.",
//   },
//   {
//     id: "teadrink02",
//     name: "Trà Đào Cam Sả - Đá",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736819_tra-dao-cam-sa-da_c0a2708af2a249f6a8df029a3faef564_large.png",
//     about:
//       "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
//   },
//   {
//     id: "teadrink03",
//     name: "Trà Đào Cam Sả Chai Fresh 500ML",
//     price: "105.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/bottle_tradao_836487_73425d2bcd244d88918412052e15022e_large.jpg",
//     about:
//       "Với phiên bản chai fresh 500ml, thức uống best seller đỉnh cao mang một diện mạo tươi mới, tiện lợi, phù hợp với bình thường mới và vẫn giữ nguyên vị thanh ngọt của đào, vị chua dịu của cam vàng nguyên vỏ và vị trà đen thơm lừng ly Trà đào cam sả nguyên bản. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
//   },
//   {
//     id: "teadrink04",
//     name: "Hồng Trà Sữa Trân Châu",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_9fa9895e23bc46818ec7800cfd35b060_large.jpg",
//     about:
//       "Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.",
//   },
//   {
//     id: "teadrink05",
//     name: "Trà sữa Oolong Nướng Trân Châu",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736877_tra-sua-oolong-nuong-tran-chau_ee56caa33ce3432e99571c302f0d6498_large.png",
//     about:
//       "Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng.",
//   },
//   {
//     id: "teadrink06",
//     name: "Trà Sữa Oolong Nướng Trân Châu Chai Fresh 500ML",
//     price: "95.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/bottle_oolong_285082_a5c6a23d73924b96b86d5e1e52e87aa0_large.jpg",
//     about:
//       "Phiên bản chai fresh 500ml mới, The Coffee House tin rằng với diện mạo mới: tiện lợi và phù hợp với bình thường mới này, các tín đồ trà sữa sẽ được thưởng thức hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh ở bất cứ nơi đâu. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
//   },
// ];

// let proclouds = [
//   {
//     id: "clouddrink01",
//     name: "CloudTea Oolong Nướng Kem Dừa",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675740758_cloudtea-oolong-nuong-kem-cheese-min_3a4d54f04afc499293ec9bb29cea471c_large.png",
//     about:
//       "Vừa chạm môi là mê mẩn ngay lớp kem dừa beo béo, kèm vụn bánh quy phô mai giòn tan trong miệng. Đặc biệt, trà Oolong nướng đậm đà, hòa cùng sữa dừa ngọt dịu. Hương vị thêm bùng nổ nhờ có thạch Oolong nướng nguyên chất, giòn dai.",
//   },
//   {
//     id: "clouddrink02",
//     name: "CloudTea Oolong Nướng Kem Cheese",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675355728_cheese_86262dc051db4cbaa02e2d80d98a2aad_large.jpg",
//     about:
//       "Hội mê cheese sao có thể bỏ lỡ chiếc trà sữa siêu mlem này. Món đậm vị Oolong nướng - nền trà được yêu thích nhất hiện nay, quyện thêm kem sữa thơm béo. Đặc biệt, chinh phục ngay fan ghiền cheese bởi lớp foam phô mai mềm tan mằn mặn. Càng ngon cực với thạch Oolong nướng nguyên chất giòn dai nhai siêu thích.",
//   },
//   {
//     id: "clouddrink03",
//     name: "CloudTea Oolong Nướng Kem Dừa Đá Xay",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675329651_bg-cloudtea-daxay_35decc79016c4a23948f7c5b87537db4_large.jpg",
//     about:
//       "Trà sữa đá xay - phiên bản nâng cấp đầy mới lạ của trà sữa truyền thống, lần đầu xuất hiện tại Nhà. Ngon khó cưỡng với lớp kem dừa béo ngậy nhưng không ngấy, thêm vụn bánh quy phô mai giòn tan vui miệng. Trà Oolong nướng rõ hương đậm vị, quyện với sữa dừa beo béo, được xay mịn cùng đá, mát rượi trong tích tắc. Đặc biệt, thạch Oolong nướng nguyên chất giúp giữ trọn vị đậm đà của trà sữa đến giọt cuối cùng.",
//   },
//   {
//     id: "clouddrink04",
//     name: "CloudFee Hạnh Nhân Nướng",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_5878cf79201a4742a022b038076b3c68_large.png",
//     about:
//       "Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa và lớp foam trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai giòn mê ly. Tất cả cùng quyện hoà trong một thức uống làm vị giác thức giấc, thơm ngon hết nấc.",
//   },
//   {
//     id: "clouddrink05",
//     name: "CloudFee Caramel",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675329314_bg-cloudfee-caramel_ec7f6224a90a4d07a6611ae730eb745c_large.jpg",
//     about:
//       "Ngon khó cưỡng bởi xíu đắng nhẹ từ cà phê phin truyền thống pha trộn với Espresso lừng danh nước Ý, quyện vị kem sữa và caramel ngọt ngọt, thêm lớp foam trứng cacao bồng bềnh béo mịn, kèm topping thạch cà phê dai giòn nhai cực cuốn. Một thức uống điểm mười cho cả ngày tươi không cần tưới.",
//   },
//   {
//     id: "clouddrink06",
//     name: "CloudFee Hà Nội",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1675329376_bg-cloudfee-classic_f74e0d642649468c8ee4f58b9ff40426_large.jpg",
//     about:
//       "Khiến bạn mê mẩn ngay ngụm đầu tiên bởi vị đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, quyện hòa cùng chút ngọt ngào của kem sữa, và thơm béo từ foam trứng cacao. Nhấp một ngụm rồi nhai cùng thạch cà phê dai dai giòn giòn, đúng chuẩn ngon quên lối về. CloudFee Classic là món đậm vị cà phê nhất trong bộ sưu tập nhưng không quá đắng, ngậy nhưng không hề ngấy.",
//   },
// ];

// let prohiteas = [
//   {
//     id: "hiteadrink01",
//     name: "Hi-Tea Yuzu Trân Châu",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736859_hi-tea-yuzu-tran-chau_f72f9f2bb0934cb998a6674ad3f9da95_large.png",
//     about:
//       "Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.",
//   },
//   {
//     id: "hiteadrink02",
//     name: "Hi-Tea Vải",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_06cc9054fb7e4cf5a56649703b9a8a51_large.png",
//     about:
//       "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
//   },
//   {
//     id: "hiteadrink03",
//     name: "Hi-Tea Đào",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669737919_hi-tea-dao_236bc043556049d5a56e2e4f812914ee_large.jpg",
//     about:
//       "Sự kết hợp ăn ý giữa Đào cùng trà hoa Hibiscus, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.",
//   },
// ];

// let protraxanhs = [
//   {
//     id: "traxanhdrink01",
//     name: "Trà Xanh Latte",
//     price: "45.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1689778809_tx-latte_330c146458494687bb8ad69644fa3f91_large.jpg",
//     about:
//       "Không cần đến Tây Bắc mới cảm nhận được sự trong trẻo của núi rừng, khi Trà Xanh Latte từ Nhà được chắt lọc từ những búp trà xanh mướt, ủ mình trong sương sớm. Trà xanh Tây Bắc vị thanh, chát nhẹ hoà cùng sữa tươi nguyên kem ngọt béo tạo nên hương vị dễ uống, dễ yêu. Đây là thức uống healthy, giúp bạn tỉnh táo một cách êm mượt, xoa dịu những căng thẳng.",
//   },
//   {
//     id: "traxanhdrink02",
//     name: "Trà Xanh Đường Đen",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1689778611_tx-duong-den_24fd0e886e7b4a7e97c84283932b6e2b_large.jpg",
//     about:
//       "Trà Xanh Đường Đen với hiệu ứng phân tầng đẹp mắt, như phác hoạ núi đồi Tây Bắc bảng lảng trong sương mây, thấp thoáng những nương chè xanh ngát. Từng ngụm là sự hài hoà từ trà xanh đậm đà, đường đen ngọt ngào, sữa tươi thơm béo. Khuấy đều trước khi dùng, để thưởng thức đúng vị",
//   },
//   {
//     id: "traxanhdrink03",
//     name: "Frosty Trà Xanh",
//     price: "59.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1689778505_tx-frosty_f68029bb7c88463cbb450f363eb6f0a4_large.jpg",
//     about:
//       "Đá Xay Frosty Trà Xanh như lời mời mộc mạc, ghé thăm Tây Bắc vào những ngày tiết trời se lạnh, núi đèo mây phủ. Vị chát dịu, ngọt thanh của trà xanh Tây Bắc kết hợp đá xay sánh mịn, whipping cream bồng bềnh và bột trà xanh trên cùng thêm đậm vị. Đây không chỉ là thức uống mát lạnh bật mood, mà còn tốt cho sức khoẻ nhờ giàu vitamin và các chất chống oxy hoá.",
//   },
// ];

// let prodaxays = [
//   {
//     id: "daxaydrink01",
//     name: "Frosty Phin-Gato",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1686021160_phin-gato-new_d3d5b5bd900d423c8548db3ca3518623_large.png",
//     about:
//       "Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng.",
//   },
//   {
//     id: "daxaydrink02",
//     name: "Frosty Cà Phê Đường Đen",
//     price: "59.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1686021199_ca-phe-duong-den-new_ceddb459c0194acfabf609eb9fd85704_large.png",
//     about:
//       "Đá Xay Frosty Cà Phê Đường Đen mát lạnh, sảng khoái ngay từ ngụm đầu tiên nhờ sự kết hợp vượt chuẩn vị quen giữa Espresso đậm đà và Đường Đen ngọt thơm. Đặc biệt, whipping cream beo béo cùng thạch cà phê giòn dai, đậm vị nhân đôi sự hấp dẫn, khơi bừng sự hứng khởi trong tích tắc.",
//   },
//   {
//     id: "daxaydrink03",
//     name: "Frosty Bánh Kem Dâu",
//     price: "59.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_7dcebeab9c47491fa867284a810106e8_large.jpg",
//     about:
//       "Bồng bềnh như một đám mây, Đá Xay Frosty Bánh Kem Dâu vừa ngon mắt vừa chiều vị giác bằng sự ngọt ngào. Bắt đầu bằng cái chạm môi với lớp kem whipping cream, cảm nhận ngay vị beo béo lẫn sốt dâu thơm lừng. Sau đó, hút một ngụm là cuốn khó cưỡng bởi đá xay mát lạnh quyện cùng sốt dâu ngọt dịu. Lưu ý: Khuấy đều phần đá xay trước khi dùng.",
//   },
// ];

// let prosnacks = [
//   {
//     id: "snack01",
//     name: "Bánh Mì Gậy Gà Kim Quất",
//     price: "25.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669737009_banh-mi-gay-ga-kim-quat_d8b14ee5a6714aa9add84af7f7ba223e_large.png",
//     about:
//       "Phiên bản nâng cấp với trọng lượng tăng 80% so với bánh mì que thông thường, đem đến cho bạn bữa ăn nhanh gọn mà vẫn đầy đủ dinh dưỡng. Cắn một miếng là mê mẩn bởi vỏ bánh nướng giòn rụm, nhân đậm vị với từng miếng thịt gà mềm, ướp sốt kim quất chua ngọt, thơm nức đặc trưng. Càng đúng bài hơn khi thưởng thức kèm Cà phê đượm vị hoặc trà Hi-Tea thanh mát.",
//   },
//   {
//     id: "snack02",
//     name: "Bánh Mì Que Pate",
//     price: "15.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736956_banh-mi-que-pate_002a163bb4bf47058362c4361aedabf7_large.png",
//     about:
//       "Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị.",
//   },
//   {
//     id: "snack03",
//     name: "Chà Bông Phô Mai",
//     price: "35.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736993_cha-bong-pho-mai_13d60efed56943649cb4122526feb85e_large.png",
//     about:
//       "Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.",
//   },
//   {
//     id: "snack04",
//     name: "Mochi Kem Phúc Bồn Tử",
//     price: "19.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1643102019_mochi-phucbontu_676076835cd34379be507ffeb8162979_large.jpg",
//     about:
//       "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.",
//   },
//   {
//     id: "snack05",
//     name: "Mochi Kem Việt Quất",
//     price: "19.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1643102034_mochi-vietquat_09a4794feb424863a60176e3bdca9beb_large.jpg",
//     about:
//       "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân việt quất đặc trưng thơm thơm, ngọt dịu. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.",
//   },
//   {
//     id: "snack06",
//     name: "Mousse Red Velvet",
//     price: "35.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/5dd2087ff2546c2614fb08d1_red-velvet_087977_f9dfd25676874daea9fa9932aad29a96_large.jpg",
//     about: "Bánh nhiều lớp được phủ lớp kem bên trên bằng Cream cheese.",
//   },
//   {
//     id: "snack07",
//     name: "Mít Sấy",
//     price: "20.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/mit-say_666228_a2b100d11ec24877b82eac5de2a61808_large.jpg",
//     about:
//       "Mít sấy khô vàng ươm, giòn rụm, giữ nguyên được vị ngọt lịm của mít tươi.",
//   },
//   {
//     id: "snack08",
//     name: "Gà Xé Lá Chanh",
//     price: "25.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/kho-ga-la-chanh_995862_70d80072c7b1456584ceef84500e94af_large.jpg",
//     about:
//       "Thịt gà được xé tơi, mang hương vị mặn, ngọt, cay cay quyện nhau vừa chuẩn, thêm chút thơm thơm thơm từ lá chanh sấy khô giòn giòn xua tan ngay cơn buồn miệng.",
//   },
// ];

// const cafeproduct = document.querySelectorAll(".cafedrink");
// cafeproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", procafes[i].img);
//   x.querySelector("img").setAttribute("alt", procafes[i].name);
//   x.querySelector("img").setAttribute("id", procafes[i].id);
//   x.querySelector(".item_name").innerHTML = procafes[i].name;
//   x.querySelector(".price_product_item").innerHTML = procafes[i].price;
// });

// const teaproduct = document.querySelectorAll(".teadrink");
// teaproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", proteas[i].img);
//   x.querySelector("img").setAttribute("alt", proteas[i].name);
//   x.querySelector("img").setAttribute("id", proteas[i].id);
//   x.querySelector(".item_name").innerHTML = proteas[i].name;
//   x.querySelector(".price_product_item").innerHTML = proteas[i].price;
// });
// const cloudproduct = document.querySelectorAll(".clouddrink");
// cloudproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", proclouds[i].img);
//   x.querySelector("img").setAttribute("alt", proclouds[i].name);
//   x.querySelector("img").setAttribute("id", proclouds[i].id);
//   x.querySelector(".item_name").innerHTML = proclouds[i].name;
//   x.querySelector(".price_product_item").innerHTML = proclouds[i].price;
// });
// const hiteaproduct = document.querySelectorAll(".hiteadrink");
// hiteaproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", prohiteas[i].img);
//   x.querySelector("img").setAttribute("alt", prohiteas[i].name);
//   x.querySelector("img").setAttribute("id", prohiteas[i].id);
//   x.querySelector(".item_name").innerHTML = prohiteas[i].name;
//   x.querySelector(".price_product_item").innerHTML = prohiteas[i].price;
// });
// const traxanhproduct = document.querySelectorAll(".traxanhdrink");
// traxanhproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", protraxanhs[i].img);
//   x.querySelector("img").setAttribute("alt", protraxanhs[i].name);
//   x.querySelector("img").setAttribute("id", protraxanhs[i].id);
//   x.querySelector(".item_name").innerHTML = protraxanhs[i].name;
//   x.querySelector(".price_product_item").innerHTML = protraxanhs[i].price;
// });
// const daxayproduct = document.querySelectorAll(".daxaydrink");
// daxayproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", prodaxays[i].img);
//   x.querySelector("img").setAttribute("alt", prodaxays[i].name);
//   x.querySelector("img").setAttribute("id", prodaxays[i].id);
//   x.querySelector(".item_name").innerHTML = prodaxays[i].name;
//   x.querySelector(".price_product_item").innerHTML = prodaxays[i].price;
// });
// const snackproduct = document.querySelectorAll(".snack");
// snackproduct.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", prosnacks[i].img);
//   x.querySelector("img").setAttribute("alt", prosnacks[i].name);
//   x.querySelector("img").setAttribute("id", prosnacks[i].id);
//   x.querySelector(".item_name").innerHTML = prosnacks[i].name;
//   x.querySelector(".price_product_item").innerHTML = prosnacks[i].price;
// });




let allproducts = [
{
    id: "allproduct01",
    name: "Phin Sữa Tươi Bánh Flan",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1696220170_phin-sua-tuoi-banh-flan_348e4d8886cc49cb968799018001c6fb_large.jpg",
    about:
      "Tỉnh tức thì cùng cà phê Robusta pha phin đậm đà và bánh flan núng nính. Uống là tỉnh, ăn là dính, xứng đáng là highlight trong ngày của bạn.",
  },
  {
    id: "allproduct02",
    name: "Trà Xanh Espresso Marble",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1696220139_tra-xanh-espresso-marble_492d249bb3ab498496bff16663d9649b_large.jpg",
    about:
      "Cho ngày thêm tươi, tỉnh, êm, mượt với Trà Xanh Espresso Marble. Đây là sự mai mối bất ngờ giữa trà xanh Tây Bắc vị mộc và cà phê Arabica Đà Lạt. Muốn ngày thêm chút highlight, nhớ tìm đến sự bất ngờ này bạn nhé!",
  },
  {
    id: "allproduct03",
    name: "Đường Đen Sữa Đá",
    price: "45.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1686716532_dd-suada_4f2bf8d7f1af4f408500d6d85e150582_large.jpg",
    about:
      "Nếu chuộng vị cà phê đậm đà, bùng nổ và thích vị đường đen ngọt thơm, Đường Đen Sữa Đá đích thị là thức uống dành cho bạn. Không chỉ giúp bạn tỉnh táo buổi sáng, Đường Đen Sữa Đá còn hấp dẫn đến ngụm cuối cùng bởi thạch cà phê giòn dai, nhai cực cuốn. - Khuấy đều trước khi sử dụng",
  },
  {
    id: "allproduct04",
    name: "The Coffee House Sữa Đá",
    price: "39.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_f3d8150a7b2744e68c7215ff13c0fe96_large.jpg",
    about:
      "Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.",
  },
  {
    id: "allproduct05",
    name: "Cà Phê Sữa Đá",
    price: "29.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_841285ad62c2440fb7ab03a5b3b6404d_large.png",
    about:
      "Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
  },
  {
    id: "allproduct06",
    name: "Bạc Sỉu",
    price: "29.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_2ec66781492d4bb0aa7acb48ef9a1742_large.jpg",
    about:
      "Bạc sỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
  },
  {
    id: "allproduct07",
    name: "Cà Phê Đen Đá",
    price: "29.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_64a5cacc17d949be995fd0cbe7cb14f9_large.jpg",
    about:
      "Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.",
  },
  {
    id: "allproduct08",
    name: "Cà Phê Sữa Đá Chai Fresh 250ML",
    price: "75.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_4b7d5ae89d07453b804ee2375ab770ce_large.jpg",
    about:
      "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
  },
 {
    id: "allproduct09",
    name: "Trà Long Nhãn Hạt Sen",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1649378747_tra-sen-nhan_01472713cfef4b8fb7fb4a90efeadd39_large.jpg",
    about:
      "Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.",
  },
  {
    id: "allproduct10",
    name: "Trà Đào Cam Sả - Đá",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736819_tra-dao-cam-sa-da_c0a2708af2a249f6a8df029a3faef564_large.png",
    about:
      "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
  },
  {
    id: "allproduct11",
    name: "Trà Đào Cam Sả Chai Fresh 500ML",
    price: "105.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/bottle_tradao_836487_73425d2bcd244d88918412052e15022e_large.jpg",
    about:
      "Với phiên bản chai fresh 500ml, thức uống best seller đỉnh cao mang một diện mạo tươi mới, tiện lợi, phù hợp với bình thường mới và vẫn giữ nguyên vị thanh ngọt của đào, vị chua dịu của cam vàng nguyên vỏ và vị trà đen thơm lừng ly Trà đào cam sả nguyên bản. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
  },
  {
    id: "allproduct12",
    name: "Hồng Trà Sữa Trân Châu",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_9fa9895e23bc46818ec7800cfd35b060_large.jpg",
    about:
      "Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.",
  },
  {
    id: "allproduct13",
    name: "Trà sữa Oolong Nướng Trân Châu",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736877_tra-sua-oolong-nuong-tran-chau_ee56caa33ce3432e99571c302f0d6498_large.png",
    about:
      "Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng.",
  },
  {
    id: "allproduct14",
    name: "Trà Sữa Oolong Nướng Trân Châu Chai Fresh 500ML",
    price: "95.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/bottle_oolong_285082_a5c6a23d73924b96b86d5e1e52e87aa0_large.jpg",
    about:
      "Phiên bản chai fresh 500ml mới, The Coffee House tin rằng với diện mạo mới: tiện lợi và phù hợp với bình thường mới này, các tín đồ trà sữa sẽ được thưởng thức hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh ở bất cứ nơi đâu. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
  }, 
  {
    id: "allproduct15",
    name: "CloudTea Oolong Nướng Kem Dừa",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675740758_cloudtea-oolong-nuong-kem-cheese-min_3a4d54f04afc499293ec9bb29cea471c_large.png",
    about:
      "Vừa chạm môi là mê mẩn ngay lớp kem dừa beo béo, kèm vụn bánh quy phô mai giòn tan trong miệng. Đặc biệt, trà Oolong nướng đậm đà, hòa cùng sữa dừa ngọt dịu. Hương vị thêm bùng nổ nhờ có thạch Oolong nướng nguyên chất, giòn dai.",
  },
  {
    id: "allproduct16",
    name: "CloudTea Oolong Nướng Kem Cheese",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675355728_cheese_86262dc051db4cbaa02e2d80d98a2aad_large.jpg",
    about:
      "Hội mê cheese sao có thể bỏ lỡ chiếc trà sữa siêu mlem này. Món đậm vị Oolong nướng - nền trà được yêu thích nhất hiện nay, quyện thêm kem sữa thơm béo. Đặc biệt, chinh phục ngay fan ghiền cheese bởi lớp foam phô mai mềm tan mằn mặn. Càng ngon cực với thạch Oolong nướng nguyên chất giòn dai nhai siêu thích.",
  },
  {
    id: "allproduct17",
    name: "CloudTea Oolong Nướng Kem Dừa Đá Xay",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675329651_bg-cloudtea-daxay_35decc79016c4a23948f7c5b87537db4_large.jpg",
    about:
      "Trà sữa đá xay - phiên bản nâng cấp đầy mới lạ của trà sữa truyền thống, lần đầu xuất hiện tại Nhà. Ngon khó cưỡng với lớp kem dừa béo ngậy nhưng không ngấy, thêm vụn bánh quy phô mai giòn tan vui miệng. Trà Oolong nướng rõ hương đậm vị, quyện với sữa dừa beo béo, được xay mịn cùng đá, mát rượi trong tích tắc. Đặc biệt, thạch Oolong nướng nguyên chất giúp giữ trọn vị đậm đà của trà sữa đến giọt cuối cùng.",
  },
  {
    id: "allproduct18",
    name: "CloudFee Hạnh Nhân Nướng",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_5878cf79201a4742a022b038076b3c68_large.png",
    about:
      "Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa và lớp foam trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai giòn mê ly. Tất cả cùng quyện hoà trong một thức uống làm vị giác thức giấc, thơm ngon hết nấc.",
  },
  {
    id: "allproduct19",
    name: "CloudFee Caramel",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675329314_bg-cloudfee-caramel_ec7f6224a90a4d07a6611ae730eb745c_large.jpg",
    about:
      "Ngon khó cưỡng bởi xíu đắng nhẹ từ cà phê phin truyền thống pha trộn với Espresso lừng danh nước Ý, quyện vị kem sữa và caramel ngọt ngọt, thêm lớp foam trứng cacao bồng bềnh béo mịn, kèm topping thạch cà phê dai giòn nhai cực cuốn. Một thức uống điểm mười cho cả ngày tươi không cần tưới.",
  },
  {
    id: "allproduct20",
    name: "CloudFee Hà Nội",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1675329376_bg-cloudfee-classic_f74e0d642649468c8ee4f58b9ff40426_large.jpg",
    about:
      "Khiến bạn mê mẩn ngay ngụm đầu tiên bởi vị đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, quyện hòa cùng chút ngọt ngào của kem sữa, và thơm béo từ foam trứng cacao. Nhấp một ngụm rồi nhai cùng thạch cà phê dai dai giòn giòn, đúng chuẩn ngon quên lối về. CloudFee Classic là món đậm vị cà phê nhất trong bộ sưu tập nhưng không quá đắng, ngậy nhưng không hề ngấy.",
  },
  {
    id: "allproduct21",
    name: "Hi-Tea Yuzu Trân Châu",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736859_hi-tea-yuzu-tran-chau_f72f9f2bb0934cb998a6674ad3f9da95_large.png",
    about:
      "Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.",
  },
  {
    id: "allproduct22",
    name: "Hi-Tea Vải",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_06cc9054fb7e4cf5a56649703b9a8a51_large.png",
    about:
      "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
  },
  {
    id: "allproduct23",
    name: "Hi-Tea Đào",
    price: "49.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669737919_hi-tea-dao_236bc043556049d5a56e2e4f812914ee_large.jpg",
    about:
      "Sự kết hợp ăn ý giữa Đào cùng trà hoa Hibiscus, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.",
  },
  {
    id: "allproduct24",
    name: "Trà Xanh Latte",
    price: "45.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1689778809_tx-latte_330c146458494687bb8ad69644fa3f91_large.jpg",
    about:
      "Không cần đến Tây Bắc mới cảm nhận được sự trong trẻo của núi rừng, khi Trà Xanh Latte từ Nhà được chắt lọc từ những búp trà xanh mướt, ủ mình trong sương sớm. Trà xanh Tây Bắc vị thanh, chát nhẹ hoà cùng sữa tươi nguyên kem ngọt béo tạo nên hương vị dễ uống, dễ yêu. Đây là thức uống healthy, giúp bạn tỉnh táo một cách êm mượt, xoa dịu những căng thẳng.",
  },
  {
    id: "allproduct25",
    name: "Trà Xanh Đường Đen",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1689778611_tx-duong-den_24fd0e886e7b4a7e97c84283932b6e2b_large.jpg",
    about:
      "Trà Xanh Đường Đen với hiệu ứng phân tầng đẹp mắt, như phác hoạ núi đồi Tây Bắc bảng lảng trong sương mây, thấp thoáng những nương chè xanh ngát. Từng ngụm là sự hài hoà từ trà xanh đậm đà, đường đen ngọt ngào, sữa tươi thơm béo. Khuấy đều trước khi dùng, để thưởng thức đúng vị",
  },
  {
    id: "allproduct26",
    name: "Frosty Trà Xanh",
    price: "59.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1689778505_tx-frosty_f68029bb7c88463cbb450f363eb6f0a4_large.jpg",
    about:
      "Đá Xay Frosty Trà Xanh như lời mời mộc mạc, ghé thăm Tây Bắc vào những ngày tiết trời se lạnh, núi đèo mây phủ. Vị chát dịu, ngọt thanh của trà xanh Tây Bắc kết hợp đá xay sánh mịn, whipping cream bồng bềnh và bột trà xanh trên cùng thêm đậm vị. Đây không chỉ là thức uống mát lạnh bật mood, mà còn tốt cho sức khoẻ nhờ giàu vitamin và các chất chống oxy hoá.",
  },
  {
    id: "allproduct27",
    name: "Frosty Phin-Gato",
    price: "55.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1686021160_phin-gato-new_d3d5b5bd900d423c8548db3ca3518623_large.png",
    about:
      "Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng.",
  },
  {
    id: "allproduct28",
    name: "Frosty Cà Phê Đường Đen",
    price: "59.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1686021199_ca-phe-duong-den-new_ceddb459c0194acfabf609eb9fd85704_large.png",
    about:
      "Đá Xay Frosty Cà Phê Đường Đen mát lạnh, sảng khoái ngay từ ngụm đầu tiên nhờ sự kết hợp vượt chuẩn vị quen giữa Espresso đậm đà và Đường Đen ngọt thơm. Đặc biệt, whipping cream beo béo cùng thạch cà phê giòn dai, đậm vị nhân đôi sự hấp dẫn, khơi bừng sự hứng khởi trong tích tắc.",
  },
  {
    id: "allproduct29",
    name: "Frosty Bánh Kem Dâu",
    price: "59.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_7dcebeab9c47491fa867284a810106e8_large.jpg",
    about:
      "Bồng bềnh như một đám mây, Đá Xay Frosty Bánh Kem Dâu vừa ngon mắt vừa chiều vị giác bằng sự ngọt ngào. Bắt đầu bằng cái chạm môi với lớp kem whipping cream, cảm nhận ngay vị beo béo lẫn sốt dâu thơm lừng. Sau đó, hút một ngụm là cuốn khó cưỡng bởi đá xay mát lạnh quyện cùng sốt dâu ngọt dịu. Lưu ý: Khuấy đều phần đá xay trước khi dùng.",
  },
  {
    id: "allproduct30",
    name: "Bánh Mì Gậy Gà Kim Quất",
    price: "25.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669737009_banh-mi-gay-ga-kim-quat_d8b14ee5a6714aa9add84af7f7ba223e_large.png",
    about:
      "Phiên bản nâng cấp với trọng lượng tăng 80% so với bánh mì que thông thường, đem đến cho bạn bữa ăn nhanh gọn mà vẫn đầy đủ dinh dưỡng. Cắn một miếng là mê mẩn bởi vỏ bánh nướng giòn rụm, nhân đậm vị với từng miếng thịt gà mềm, ướp sốt kim quất chua ngọt, thơm nức đặc trưng. Càng đúng bài hơn khi thưởng thức kèm Cà phê đượm vị hoặc trà Hi-Tea thanh mát.",
  },
  {
    id: "allproduct31",
    name: "Bánh Mì Que Pate",
    price: "15.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736956_banh-mi-que-pate_002a163bb4bf47058362c4361aedabf7_large.png",
    about:
      "Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị.",
  },
  {
    id: "allproduct32",
    name: "Chà Bông Phô Mai",
    price: "35.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1669736993_cha-bong-pho-mai_13d60efed56943649cb4122526feb85e_large.png",
    about:
      "Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.",
  },
  {
    id: "allproduct33",
    name: "Mochi Kem Phúc Bồn Tử",
    price: "19.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1643102019_mochi-phucbontu_676076835cd34379be507ffeb8162979_large.jpg",
    about:
      "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.",
  },
  {
    id: "allproduct34",
    name: "Mochi Kem Việt Quất",
    price: "19.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/1643102034_mochi-vietquat_09a4794feb424863a60176e3bdca9beb_large.jpg",
    about:
      "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân việt quất đặc trưng thơm thơm, ngọt dịu. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.",
  },
  {
    id: "allproduct35",
    name: "Mousse Red Velvet",
    price: "35.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/5dd2087ff2546c2614fb08d1_red-velvet_087977_f9dfd25676874daea9fa9932aad29a96_large.jpg",
    about: "Bánh nhiều lớp được phủ lớp kem bên trên bằng Cream cheese.",
  },
  {
    id: "allproduct36",
    name: "Mít Sấy",
    price: "20.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/mit-say_666228_a2b100d11ec24877b82eac5de2a61808_large.jpg",
    about:
      "Mít sấy khô vàng ươm, giòn rụm, giữ nguyên được vị ngọt lịm của mít tươi.",
  },
  {
    id: "allproduct37",
    name: "Gà Xé Lá Chanh",
    price: "25.000 đ",
    type: 1,
    img: "https://product.hstatic.net/1000075078/product/kho-ga-la-chanh_995862_70d80072c7b1456584ceef84500e94af_large.jpg",
    about:
      "Thịt gà được xé tơi, mang hương vị mặn, ngọt, cay cay quyện nhau vừa chuẩn, thêm chút thơm thơm thơm từ lá chanh sấy khô giòn giòn xua tan ngay cơn buồn miệng.",
  },
]
const allproduct = document.querySelectorAll(".allproduct");
allproduct.forEach((x, i) => {
  x.querySelector("img").setAttribute("src", allproducts[i].img);
  x.querySelector("img").setAttribute("alt", allproducts[i].name);
  x.querySelector("img").setAttribute("id", allproducts[i].id);
  x.querySelector(".item_name").innerHTML = allproducts[i].name;
  x.querySelector(".price_product_item").innerHTML = allproducts[i].price;
});

const allproductsDetail = allproducts.find(x => x.id == window.location.search.slice(4))
const allproductDetail = document.querySelector('.main-detail')
allproductDetail.querySelector('.detail-name').innerText = allproductsDetail.name
allproductDetail.querySelector('.detail-price').innerText = allproductsDetail.price
allproductDetail.querySelector('img').setAttribute("src", allproductsDetail.img)
allproductDetail.querySelector('img').setAttribute("alt", allproductsDetail.name)
const allproductDetail1 = document.querySelector('.bottom-detail')
allproductDetail1.querySelector('.about-content').innerText = allproductsDetail.about

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

const allproductArr = getRandomElements(allproducts, 6);
for (var id= 0; i <= 5; i++) {
  var allproductrandom = document.getElementById("allproduct0" + (i + 1));
  console.log(
    "document.querySelector(`#allproduct0${(i+1)} img`)",
    document.querySelector(`#allproduct0${i + 1} img`)
  );
  allproductrandom.querySelector(".card-name").innerText =
    allproductArr[i].name;
  allproductrandom.querySelector(".card-price").innerText =
    allproductArr[i].price;
  allproductrandom
    .querySelector("img")
    .setAttribute("src", allproductArr[i].img);
  allproductrandom
    .querySelector("img")
    .setAttribute("alt", allproductArr[i].name);
}
// let teadrinks = [
//   {
//     id: "allproduct09",
//     name: "Trà Long Nhãn Hạt Sen",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1649378747_tra-sen-nhan_01472713cfef4b8fb7fb4a90efeadd39_large.jpg",
//     about:
//       "Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.",
//   },
//   {
//     id: "allproduct10",
//     name: "Trà Đào Cam Sả - Đá",
//     price: "49.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736819_tra-dao-cam-sa-da_c0a2708af2a249f6a8df029a3faef564_large.png",
//     about:
//       "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
//   },
//   {
//     id: "allproduct11",
//     name: "Trà Đào Cam Sả Chai Fresh 500ML",
//     price: "105.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/bottle_tradao_836487_73425d2bcd244d88918412052e15022e_large.jpg",
//     about:
//       "Với phiên bản chai fresh 500ml, thức uống best seller đỉnh cao mang một diện mạo tươi mới, tiện lợi, phù hợp với bình thường mới và vẫn giữ nguyên vị thanh ngọt của đào, vị chua dịu của cam vàng nguyên vỏ và vị trà đen thơm lừng ly Trà đào cam sả nguyên bản. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
//   },
//   {
//     id: "allproduct12",
//     name: "Hồng Trà Sữa Trân Châu",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_9fa9895e23bc46818ec7800cfd35b060_large.jpg",
//     about:
//       "Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.",
//   },
//   {
//     id: "allproduct13",
//     name: "Trà sữa Oolong Nướng Trân Châu",
//     price: "55.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/1669736877_tra-sua-oolong-nuong-tran-chau_ee56caa33ce3432e99571c302f0d6498_large.png",
//     about:
//       "Hương vị chân ái đúng gu đậm đà với trà oolong được “sao” (nướng) lâu hơn cho hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh, lưu luyến vị trà sữa đậm đà nơi vòm họng.",
//   },
//   {
//     id: "allproduct14",
//     name: "Trà Sữa Oolong Nướng Trân Châu Chai Fresh 500ML",
//     price: "95.000 đ",
//     img: "https://product.hstatic.net/1000075078/product/bottle_oolong_285082_a5c6a23d73924b96b86d5e1e52e87aa0_large.jpg",
//     about:
//       "Phiên bản chai fresh 500ml mới, The Coffee House tin rằng với diện mạo mới: tiện lợi và phù hợp với bình thường mới này, các tín đồ trà sữa sẽ được thưởng thức hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh ở bất cứ nơi đâu. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
//   }, 
// ]
// const teadrink = document.querySelectorAll(".tea");
// teadrink.forEach((x, i) => {
//   x.querySelector("img").setAttribute("src", teadrinks[i].img);
//   x.querySelector("img").setAttribute("alt", teadrinks[i].name);
//   x.querySelector("img").setAttribute("id", teadrinks[i].id);
//   x.querySelector(".item_name").innerHTML = teadrinks[i].name;
//   x.querySelector(".price_product_item").innerHTML = teadrinks[i].price;
// });