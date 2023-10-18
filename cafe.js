// $(document).ready(function(){
//     $(".go-detail").click(function(){
//         window.location.href("./cafeDetail/cafeDetail01.html")
//     })
// })
let cafes = [
     { 
      id: 'cafe01',
      name: "cafe 01",
      price: "31.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
    { 
      id: 'cafe02',
      name: "cafe 02",
        price: "32.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   { 
      id: 'cafe03',
      name: "cafe 03",
        price: "33.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   { 
      id: 'cafe04',
      name: "cafe 04",
        price: "34.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   { 
      id: 'cafe05',
      name: "cafe 05",
        price: "35.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   { 
      id: 'cafe06',
      name: "cafe 06",
        price: "36.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   { 
      id: 'cafe07',
      name: "cafe 07",
        price: "37.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   { 
      id: 'cafe08',
      name: "cafe 08",
        price: "38.000",
      img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
   },
   ]
   const product = document.querySelectorAll('.products')
   product.forEach((x, i)=> {
     x.querySelector('img').setAttribute('src', cafes[i].img) 
     x.querySelector('img').setAttribute('id', cafes[i].id) 
     x.querySelector('.card-text').innerText = cafes[i].name
     x.querySelector('.price').innerText = cafes[i].price
   })

function goDetail(event){
     window.location = `./cafeDetail/cafeDetail01.html?id=${event.id}`;
}