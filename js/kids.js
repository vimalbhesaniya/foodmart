
const kids =[
  {
    name: "Building Blocks Set",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=320&fit=crop&q=80",
    page: "building-blocks.html",
    unit: "100 Pieces",
    rating: 4.8,
    price: 29.99,
    discount: "-20%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Plush Teddy Bear",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&h=320&fit=crop&q=80",
    page: "teddy-bear.html",
    unit: "1 Piece",
    rating: 4.7,
    price: 19.99,
    discount: "-15%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Remote Control Car",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=320&fit=crop&q=80",
    page: "rc-car.html",
    unit: "1 Unit",
    rating: 4.6,
    price: 39.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Art Supply Kit",
    image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=400&h=320&fit=crop&q=80",
    page: "art-kit.html",
    unit: "1 Set",
    rating: 4.5,
    price: 24.99,
    discount: "-25%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Educational Puzzle",
    image: "https://m.media-amazon.com/images/I/812LecVlRPL.jpg",
    page: "puzzle.html",
    unit: "1 Set",
    rating: 4.7,
    price: 14.99,
    discount: "-30%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Kids' Bicycle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMuvoy8upVIzHlgJ-OJgLYZHbiNKtcPQuBA&s",
    page: "bicycle.html",
    unit: "1 Unit",
    rating: 4.8,
    price: 89.99,
    discount: "-15%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Dinosaur Figure Set",
    image: "https://m.media-amazon.com/images/I/918lNhAKvQL.jpg",
    page: "dinosaur-set.html",
    unit: "12 Pieces",
    rating: 4.6,
    price: 19.99,
    discount: "-10%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Board Game Collection",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=320&fit=crop&q=80",
    page: "board-games.html",
    unit: "3 Games",
    rating: 4.7,
    price: 34.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Play Kitchen Set",
    image: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=400&h=320&fit=crop&q=80",
    page: "play-kitchen.html",
    unit: "1 Set",
    rating: 4.9,
    price: 79.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Musical Keyboard",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=320&fit=crop&q=80",
    page: "kids-keyboard.html",
    unit: "1 Unit",
    rating: 4.5,
    price: 49.99,
    discount: "-10%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Dollhouse",
    image: "https://m.media-amazon.com/images/I/71Jmq4sg6jL.jpg",
    page: "dollhouse.html",
    unit: "1 Set",
    rating: 4.8,
    price: 69.99,
    discount: "-25%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Science Experiment Kit",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=400&h=320&fit=crop&q=80",
    page: "science-kit.html",
    unit: "1 Kit",
    rating: 4.7,
    price: 29.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Superhero Action Figures",
    image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=400&h=320&fit=crop&q=80",
    page: "action-figures.html",
    unit: "5 Figures",
    rating: 4.6,
    price: 24.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Interactive Globe",
    image: "https://images.unsplash.com/photo-1564053489984-317bbd824340?w=400&h=320&fit=crop&q=80",
    page: "interactive-globe.html",
    unit: "1 Unit",
    rating: 4.5,
    price: 39.99,
    discount: "-10%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Magic Kit",
    image: "https://m.media-amazon.com/images/I/81bA-686dKL.jpg",
    page: "magic-kit.html",
    unit: "1 Set",
    rating: 4.4,
    price: 19.99,
    discount: "-30%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Kids' Tool Bench",
    image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=400&h=320&fit=crop&q=80",
    page: "tool-bench.html",
    unit: "1 Set",
    rating: 4.7,
    price: 44.99,
    discount: "-20%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Outdoor Play Tent",
    image: "https://m.media-amazon.com/images/I/71SfH33TfWL._AC_UF1000,1000_QL80_.jpg",
    page: "play-tent.html",
    unit: "1 Unit",
    rating: 4.6,
    price: 34.99,
    discount: "-15%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Magnetic Building Tiles",
    image: "https://images.unsplash.com/photo-1560167016-022b78a0258e?w=400&h=320&fit=crop&q=80",
    page: "magnetic-tiles.html",
    unit: "64 Pieces",
    rating: 4.9,
    price: 49.99,
    discount: "-10%",
    wishlist: false,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Kids' Drum Set",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=320&fit=crop&q=80",
    page: "drum-set.html",
    unit: "1 Set",
    rating: 4.5,
    price: 59.99,
    discount: "-25%",
    wishlist: true,
    quantity: 1,
    addToCart: true,
  },
  {
    name: "Interactive Story Book",
    image: "https://ugm.ac.id/wp-content/uploads/2017/05/1505171494838212604781829-765x510.jpg",
    page: "story-book.html",
    unit: "1 Book",
    rating: 4.7,
    price: 24.99,
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
    const kidsElement = document.getElementById("kids");
  
    kids.forEach((product, index) => {
      kidsElement.innerHTML += products(product, index);
    });
  
    const itemsHTML = kidsElement.innerHTML;
    kidsElement.innerHTML = itemsHTML;
  }
  
  window.addEventListener("load", renderProducts);
  