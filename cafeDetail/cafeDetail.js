let cafe = [
   { 
    id: 1,
    name: "cafe 01",
    price: "31.000",
    img: "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_e9409318c09d4ad4935d1554be363429_large.jpg"
},
  { 
    id: 2,
    name: "cafe 02",
      price: "32.000",
    img: ""
},
{ 
    id: 3,
    name: "cafe 03",
      price: "33.000",
    img: ""
},
{ 
    id: 4,
    name: "cafe 04",
      price: "34.000",
    img: ""
},
{ 
    id: 5,
    name: "cafe 05",
      price: "35.000",
    img: ""
},
{ 
    id: 6,
    name: "cafe 06",
      price: "36.000",
    img: ""
},
{ 
    id: 7,
    name: "cafe 07",
      price: "37.000",
    img: ""
},
{ 
    id: 8,
    name: "cafe 08",
      price: "38.000",
    img: ""
},
]
// var randomProperty = function (obj) {
//     var keys = Object.keys(obj);
//     return obj[keys[ keys.length * Math.random() << 0]];
// };
// console.log(randomProperty(cafe))

// var cafeName01 = document.getElementById("cafe01")
// cafeName01.innerText = randomProperty(cafe).name
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

console.log(getRandomElements(cafe, 6))
var cafeName01 = document.getElementById("cafe01")
cafeName01.innerText = getRandomElements(cafe,6)[0].name
var cafeName02 = document.getElementById("cafe02")
cafeName02.innerText = getRandomElements(cafe,6)[1].name
var cafeName03 = document.getElementById("cafe03")
cafeName03.innerText = getRandomElements(cafe,6)[2].name
var cafeName04 = document.getElementById("cafe04")
cafeName04.innerText = getRandomElements(cafe,6)[3].name
var cafeName05 = document.getElementById("cafe05")
cafeName05.innerText = getRandomElements(cafe,6)[4].name