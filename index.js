
let items = [
  {
    id: 1,
    image: "Catagories/1.jpg",
    rating: {
      stars: 4.6,
      Reviews: 1200,
     
    },

    companyName: "Cartlon London",
    productName: "Rhodium-Plated CZ Florals studs",
    cprice: 700,
    oprice: 1400,
    discount: 50,
    return:14,
    deliveryDate:"1 Aug 2024",
  },
  {
    id: 2,
    image: "Catagories/2.jpg",
    rating: {
      stars: 5.6,
      Reviews: 1700,
      
    },

    companyName: "Cukoo",
    productName: "Women Padded  Swimming Dress",
    cprice: 1507,
    oprice: 2599,
    discount: 42,
    return:14,
      deliveryDate:"1 Aug 2024",
  },
  {
    id: 3,
    image: "Catagories/3.jpg",
    rating: {
      stars: 4.1,
      Reviews: 249,
      
    },

    companyName: "NUEVOSDAMAS",
    productName: "Women Red White Knee-Length Skirts",
    cprice: 1590,
    oprice: 495,
    discount: 69,
    return:14,
      deliveryDate:"1 Aug 2024",
  },
  {
    id: 4,
    image: "Catagories/4.jpg",
    rating: {
      stars: 5.0,
      Reviews: 1212,
    
    },

    companyName: "ADIDAS",
    productName: "Indian Cricket ODI Jersey",
    cprice: 999,
    oprice: 999,
    discount: 0,
    return:14,
      deliveryDate:"1 Aug 2024",
  },
  {
    id: 5,
    image: "Catagories/5.jpg",
    rating: {
      stars: 4.2,
      Reviews: 3212,
     
    },
    companyName: "Roadster",
    productName: "Pure Cotton T-shirt",
    cprice: 699,
    oprice: 1489,
    discount: 65,
    return:14,
    deliveryDate:"1 Aug 2024",
  },
  {
    id: 6,
    image: "Catagories/4.jpg",
    rating: {
      stars: 4.9,
      Reviews: 3000,
   
    },
    companyName: "Nike",
    productName: "Men ReactX Running Shoes",
    cprice: 2399,
    oprice: 5000,
    discount: 60,
    return:14,
    deliveryDate:"1 Aug 2024",
  },
  {
    id: 7,
    image: "Catagories/7.jpg",
    rating: {
      stars: 4.0,
      Reviews: 900,
     
    },
    companyName: "The Indian Garage Co",
    productName: "Men Slim Fit Regular Shorts",
    cprice: 1499,
    oprice: 2000,
    discount: 30,
    return:14,
    deliveryDate:"1 Aug 2024",
  },
  {
    id: 8,
    image: "Catagories/8.jpg",
    rating: {
      stars: 4.1,
      Reviews: 800,
     
    },
    companyName: "Nivea",
    productName: "Men Fresh Deodrant 150ml",
    cprice: 285,
    oprice: 400,
    discount: 20,
    return:14,
    deliveryDate:"1 Aug 2024",
  },
];

let bagItems;
onLoad();
function onLoad() {
    let bagItemStr = localStorage.getItem('bagItem');
    bagItems = bagItemStr?JSON.parse(bagItemStr):[];
  displayItems();
  displayCount();
}

function addToBag(itemID) {
  bagItems.push(itemID);
  localStorage.setItem("bagItem", JSON.stringify(bagItems));
  displayCount();
}
function displayCount() {
  let displayCount = document.querySelector(".countItems");
  if (bagItems.length > 0) {
    displayCount.style.visibility = "visible";
    displayCount.innerHTML = bagItems.length;
  } else {
    displayCount.style.visibility = "hidden";
  }
}

function displayItems() {
  let itemsContainer = document.querySelector(".items-container");
  // console.log(itemsContainer);
  if (!itemsContainer) {
    return;
  
  }

  let result = "";
  items.forEach((item) => {
    result += `  <div class="item-container">
          <img class="image" src="${item.image}" alt="" />
          <div class="rating">${item.rating.stars} ⭐ | ${item.rating.Reviews}</div>
          <div class="company-name">${item.companyName}</div>
          <div class="product-name">${item.productName}</div>
          <div class="price">
          <span class="cprice"> RS ${item.cprice}</span>
          <span class="oprice"> RS ${item.oprice}</span>
          <span class="discount">(${item.discount}% OFF) </span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
      </div>`;
  });
  itemsContainer.innerHTML = result;
}
