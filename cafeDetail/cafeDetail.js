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

const productDetail = cafes.find(x => x.id == window.location.search.slice(4))
const elDetail = document.querySelector('.main-detail')
elDetail.querySelector('.detail-title').innerText = productDetail.name

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

const newArr = getRandomElements(cafes, 6)
for(var i = 0; i <= 5; i++) {
  var cafeName01 = document.getElementById("cafe0"+(i+1))
  console.log('document.querySelector(`#cafe0${(i+1)} img`)', document.querySelector(`#cafe0${(i+1)} img`));
  // document.querySelector(`#cafe0${(i+1)} img`).setAttribute('msp', newArr[i].img)
  cafeName01.querySelector('.card-text').innerText = newArr[i].name
}