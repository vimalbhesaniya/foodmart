const newlyLauncehed = [
  {
    name: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=320&fit=crop&q=80",
    page: "wireless-earbuds.html",
    unit: "Pair",
    rating: 4.7,
    price: 89.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=320&fit=crop&q=80",
    page: "smart-watch.html",
    unit: "Each",
    rating: 4.8,
    price: 199.99,
    discount: "-15%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Coffee Maker",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=320&fit=crop&q=80",
    page: "coffee-maker.html",
    unit: "Each",
    rating: 4.6,
    price: 129.99,
    discount: "-25%",
    wishlist: true,
    quantity: 1,
    addToCart: false,
  },
  {
    name: "Yoga Mat",
    image: "https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=400&h=320&fit=crop&q=80",
    page: "yoga-mat.html",
    unit: "Each",
    rating: 4.5,
    price: 45.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Desk Lamp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNT7Sn5yewqcy4XhVSiCmk8JIE2Pp75fpEg&s",
    page: "desk-lamp.html",
    unit: "Each",
    rating: 4.3,
    price: 39.99,
    discount: "-30%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Leather Wallet",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=320&fit=crop&q=80",
    page: "leather-wallet.html",
    unit: "Each",
    rating: 4.7,
    price: 49.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Indoor Plant",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=320&fit=crop&q=80",
    page: "indoor-plant.html",
    unit: "Each",
    rating: 4.6,
    price: 34.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=320&fit=crop&q=80",
    page: "bluetooth-speaker.html",
    unit: "Each",
    rating: 4.8,
    price: 79.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: false,
  },
  {
    name: "Ceramic Mug",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=320&fit=crop&q=80",
    page: "ceramic-mug.html",
    unit: "Each",
    rating: 4.4,
    price: 17.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Canvas Backpack",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=320&fit=crop&q=80",
    page: "canvas-backpack.html",
    unit: "Each",
    rating: 4.7,
    price: 59.99,
    discount: "-25%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Essential Oil Diffuser",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=320&fit=crop&q=80",
    page: "oil-diffuser.html",
    unit: "Each",
    rating: 4.6,
    price: 29.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Polaroid Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=320&fit=crop&q=80",
    page: "polaroid-camera.html",
    unit: "Each",
    rating: 4.9,
    price: 129.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: false,
  },
  {
    name: "Wooden Cutting Board",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&h=320&fit=crop&q=80",
    page: "cutting-board.html",
    unit: "Each",
    rating: 4.5,
    price: 35.99,
    discount: "-10%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Fitness Tracker",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=320&fit=crop&q=80",
    page: "fitness-tracker.html",
    unit: "Each",
    rating: 4.7,
    price: 89.99,
    discount: "-30%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Scented Candle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff7bXvMrrc8Ej7k8grELgkjdzYmkjgITD2g&s",
    page: "scented-candle.html",
    unit: "Each",
    rating: 4.4,
    price: 24.99,
    discount: "-15%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=320&fit=crop&q=80",
    page: "mechanical-keyboard.html",
    unit: "Each",
    rating: 4.8,
    price: 119.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: false,
  },
  {
    name: "Leather Journal",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=400&h=320&fit=crop&q=80",
    page: "leather-journal.html",
    unit: "Each",
    rating: 4.6,
    price: 29.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Portable Charger",
    image: "https://media.wired.com/photos/6504b2a1afe02332db973557/master/w_320%2Cc_limit/Ugreen_Power_Bank-SOURCE-Ugreen-Gear.jpg",
    page: "portable-charger.html",
    unit: "Each",
    rating: 4.7,
    price: 39.99,
    discount: "-25%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Cotton Bedsheet Set",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=320&fit=crop&q=80",
    page: "bedsheet-set.html",
    unit: "Set",
    rating: 4.5,
    price: 79.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Air Purifier",
    image: "https://m.media-amazon.com/images/I/61edPHS+x-L.jpg",
    page: "air-purifier.html",
    unit: "Each",
    rating: 4.8,
    price: 149.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: false,
  },
 
]

function products(product, index) {
  const {
    name,
    image,
    page,
    unit,
    rating,
    price,
    discount,
    wishlist,
    quantity,
    addToCart,
  } = product;

  return `
          <div class="col">
                          <div class="product-item">
                            <span class="badge bg-success position-absolute m-3">${discount}</span>
                            <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
                            <figure>
                              <a href="index.html" title="${name}">
                                <img src="${image}" class="tab-image custom-tab-image">
                              </a>
                            </figure>
                            <h3>${name}</h3>
                            <span class="qty">${unit} Unit</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg>${rating}</span>
                            <span class="price">$${price}</span>
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="input-group product-qty">
                                  <span class="input-group-btn">
                                      <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                        <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                                      </button>
                                  </span>
                                  <input type="text" id="quantity" name="quantity" class="form-control input-number" value="${quantity}">
                                  <span class="input-group-btn">
                                      <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                          <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                                      </button>
                                  </span>
                              </div>
                              <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                            </div>
                          </div>
                        </div>
        `;
}

function renderProducts() {
  const newlyLauncehedElement = document.getElementById("newlyLauncehed");

  newlyLauncehed.forEach((product, index) => {
    newlyLauncehedElement.innerHTML += products(product, index);
  });

  const itemsHTML = newlyLauncehedElement.innerHTML;
  newlyLauncehedElement.innerHTML = itemsHTML;
}

window.addEventListener("load", renderProducts);
  