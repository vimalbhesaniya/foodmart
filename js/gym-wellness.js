
const gymWellness = [
  {
    name: "Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=320&fit=crop&q=80",
    page: "running-shoes.html",
    unit: "1 Pair",
    rating: 4.7,
    price: 89.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Adjustable Dumbbells",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=320&fit=crop&q=80",
    page: "adjustable-dumbbells.html",
    unit: "1 Set",
    rating: 4.8,
    price: 249.99,
    discount: "-15%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Fitness Tracker",
    image: "https://m.media-amazon.com/images/I/61dV494jBgL.jpg",
    page: "fitness-tracker.html",
    unit: "1 Unit",
    rating: 4.6,
    price: 129.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Yoga Mat",
    image: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=400&h=320&fit=crop&q=80",
    page: "yoga-mat.html",
    unit: "1 Unit",
    rating: 4.5,
    price: 39.99,
    discount: "-25%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Resistance Bands Set",
    image: "https://m.media-amazon.com/images/I/71-87y93B+L._AC_UF894,1000_QL80_.jpg",
    page: "resistance-bands.html",
    unit: "5 Pieces",
    rating: 4.4,
    price: 29.99,
    discount: "-30%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Foam Roller",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&h=320&fit=crop&q=80",
    page: "foam-roller.html",
    unit: "1 Unit",
    rating: 4.5,
    price: 24.99,
    discount: "-10%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Protein Powder",
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/16099/p4-proteinpowder-ml0225-gi1015345458.jpg",
    page: "protein-powder.html",
    unit: "2 lbs",
    rating: 4.6,
    price: 49.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Jump Rope",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&h=320&fit=crop&q=80",
    page: "jump-rope.html",
    unit: "1 Unit",
    rating: 4.3,
    price: 19.99,
    discount: "-5%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Kettlebell",
    image: "https://images.unsplash.com/photo-1676109787053-b2a335963d5d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlYmVsbHN8ZW58MHx8MHx8fDA%3D",
    page: "kettlebell.html",
    unit: "16kg",
    rating: 4.7,
    price: 54.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Compression Shorts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk4OfCZS784gvm24NcuvxEvv0PWPCmzd1yw&s",
    page: "compression-shorts.html",
    unit: "1 Pair",
    rating: 4.4,
    price: 34.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Shaker Bottle",
    image: "https://img.freepik.com/free-vector/protein-shaker-cup-sports-nutrition-gainer-whey-shake-drink-plastic-sport-bottle-mixer-gym-fitness-bodybuilding-isolated-white-background-realistic-3d-vector-mockup_88138-522.jpg?semt=ais_hybrid&w=740",
    page: "shaker-bottle.html",
    unit: "20oz",
    rating: 4.2,
    price: 12.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=320&fit=crop&q=80",
    page: "wireless-earbuds.html",
    unit: "1 Pair",
    rating: 4.5,
    price: 99.99,
    discount: "-25%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Weight Lifting Gloves",
    image: "https://images.unsplash.com/photo-1541600383005-565c949cf777?w=400&h=320&fit=crop&q=80", 
    page: "lifting-gloves.html",
    unit: "1 Pair",
    rating: 4.3,
    price: 19.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Ab Roller Wheel",
    image: "https://m.media-amazon.com/images/I/71dYJs4CvOL.jpg",
    page: "ab-roller.html",
    unit: "1 Unit",
    rating: 4.6,
    price: 22.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Massage Gun",
    image: "https://m.media-amazon.com/images/I/61BzwtmQptL.jpg",
    page: "massage-gun.html",
    unit: "1 Unit",
    rating: 4.8,
    price: 149.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Pull-Up Bar",
    image: "https://m.media-amazon.com/images/I/31eXCbOSWoL._AC_UF894,1000_QL80_.jpg",
    page: "pull-up-bar.html",
    unit: "1 Unit",
    rating: 4.4,
    price: 29.99,
    discount: "-10%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Water Bottle",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=320&fit=crop&q=80",
    page: "water-bottle.html",
    unit: "32oz",
    rating: 4.5,
    price: 24.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Yoga Block Set",
    image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef0?w=400&h=320&fit=crop&q=80",
    page: "yoga-blocks.html",
    unit: "2 Pieces",
    rating: 4.3,
    price: 18.99,
    discount: "-15%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Heart Rate Monitor",
    image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=400&h=320&fit=crop&q=80",
    page: "heart-monitor.html",
    unit: "1 Unit",
    rating: 4.7,
    price: 79.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Workout Bench",
    image: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=400&h=320&fit=crop&q=80",
    page: "workout-bench.html",
    unit: "1 Unit",
    rating: 4.8,
    price: 159.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  }
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
                          <div class=" product-item">
                            <figure>
                              <a href="index.html" title="${name}">
                                <img src="${image}" class="tab-image custom-tab-image">
                              </a>
                            </figure>
                            <h3>${name}</h3>
                            <span class="qty text-wrap text-break ">${unit} Unit</span>
                            <div class="mt-1 bg-dark text-center rounded d-flex justify-content-center gap-2">
                            <img src="../images/icons8-whatsapp.svg" alt="" />
                              <a href="#" class="nav-link text-white">Contact On Whatsapp</a>
                            </div>
                          </div>
                        </div>
      `;
  }
  
  function renderProducts() {
    const gymWellnessElement = document.getElementById("gymWellness");
  
    gymWellness.forEach((product, index) => {
      gymWellnessElement.innerHTML += products(product, index);
    });
  
    const itemsHTML = gymWellnessElement.innerHTML;
    gymWellnessElement.innerHTML = itemsHTML;
  }
  
  window.addEventListener("load", renderProducts);
  