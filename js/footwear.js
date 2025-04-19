
const footwearProducts = [
  {
    name: "Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.7,
    price: 89.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Hiking Boots",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.8,
    price: 129.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Casual Sneakers",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.5,
    price: 59.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Dress Shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.6,
    price: 99.99,
    discount: "-5%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Leather Boots",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.9,
    price: 149.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Slip-On Loafers",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.4,
    price: 69.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Canvas Shoes",
    image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.3,
    price: 39.99,
    discount: "-25%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Sandals",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.2,
    price: 29.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Winter Boots",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.7,
    price: 109.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Flip Flops",
    image: "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.0,
    price: 19.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Tennis Shoes",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.5,
    price: 79.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Waterproof Shoes",
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.7,
    price: 99.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Boat Shoes",
    image: "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.4,
    price: 69.99,
    discount: "-5%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Rain Boots",
    image: "https://images.unsplash.com/photo-1541346160430-93fcee38d521?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.5,
    price: 49.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Work Boots",
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.9,
    price: 129.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Skate Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.6,
    price: 64.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Ballet Flats",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.4,
    price: 44.99,
    discount: "-12%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Heeled Sandals",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.3,
    price: 59.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Casual Mules",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.4,
    price: 49.99,
    discount: "-8%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Walking Shoes",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=320&fit=crop&q=80",
    page: "index.html",
    unit: "1 Pair",
    rating: 4.7,
    price: 69.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
];
  
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
                          <span class="badge bg-success position-absolute m-3">${discount}}</span>
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
    const footwearElement = document.getElementById("footwear");
  
    footwearProducts.forEach((product, index) => {
      footwearElement.innerHTML += products(product, index);
    });
  
    const itemsHTML = footwearElement.innerHTML;
    footwearElement.innerHTML = itemsHTML;
  }
  
  window.addEventListener("load", renderProducts);
  