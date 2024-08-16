const CFEES=99;
let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayItems();
  displayBagSummary();
}
function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary");
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let totalAmount = 0;
  bagItemObjects.forEach((bagItemm) => {
    totalMRP += bagItemm.oprice;
    totalDiscount += bagItemm.oprice - bagItemm.cprice;
  });
  totalAmount +=totalMRP-totalDiscount+CFEES;

  bagSummaryElement.innerHTML = ` <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem}Items)</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                >-₹${totalDiscount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹99</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹ ${totalAmount}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
          `;
}
function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map((itemsID) => {
    for (i = 0; i < items.length; i++) {
      if (itemsID == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayItems() {
  let displayitem = document.querySelector(".bag-items-container");
  let innerHTML = "";
  bagItemObjects.map((bagItem) => {
    innerHTML += generateItems(bagItem);
  });
  displayitem.innerHTML = innerHTML;
}
function removeFromBag(itemID) {
  bagItems = bagItems.filter((bagitemID) => bagitemID != itemID);
  localStorage.setItem("bagItem", JSON.stringify(bagItems));
  loadBagItemObjects();
  displayCount();
  displayItems();
  displayBagSummary();
}
function generateItems(item) {
  return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${item.image}" />
            </div>
            <div class="item-right-part">
              <div class="company">${item.companyName}</div>
              <div class="item-name">
                ${item.productName}
              </div>
              <div class="price-container">
                <span class="current-price">Rs ${item.cprice}</span>
                <span class="original-price">Rs ${item.oprice}</span>
                <span class="discount-percentage">(${item.discount} OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return} day</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.deliveryDate}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>`;
}
