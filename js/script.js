// import { accessories } from "../constants/categories";

(function ($) {
  "use strict";

  var initPreloader = function () {
    $(document).ready(function ($) {
      var Body = $("body");
      Body.addClass("preloader-site");
    });
    $(window).load(function () {
      $(".preloader-wrapper").fadeOut();
      $("body").removeClass("preloader-site");
    });
  };

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll(".image-link"), {
      imageSize: "contain",
      loop: true,
    });
  };

  var initSwiper = function () {
    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      },
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      },
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      },
    });
  };

  var initProductQty = function () {
    $(".product-qty").each(function () {
      var $el_product = $(this);
      var quantity = 0;

      $el_product.find(".quantity-right-plus").click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find("#quantity").val());
        $el_product.find("#quantity").val(quantity + 1);
      });

      $el_product.find(".quantity-left-minus").click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find("#quantity").val());
        if (quantity > 0) {
          $el_product.find("#quantity").val(quantity - 1);
        }
      });
    });
  };

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  };

  // document ready
  $(document).ready(function () {
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();
  }); // End of a document
})(jQuery);

const categories = [
  {
    name: "Quirky Home<br>Essentials",
    page: "quirky-home-essentials.html",
    image: "https://thepurplepopshop.com/cdn/shop/files/Astronaut2_7fe352c1-ef29-439e-a756-60fb487b4390_533x.png?v=1718262077",
  },
  {
    name: "Beauty &<br>Personal Care",
    page: "beauty-personal-care.html",
    image: "https://images.verifiedmarketresearch.com/assets/Top-7-personal-care-product-companies-empowering-beauty-and-enhancing-well-being.jpg",
  },
  {
    name: "Car & Bike<br>Accessories",
    page: "car-bike-accessories.html",
    image: "https://tiimg.tistatic.com/fp/1/008/635/sports-bike-accessories-411.jpg",
  },
  {
    name: "Gym &<br>Wellness",
    page: "gym-wellness.html",
    image: "https://stream-blog-v2.imgix.net/blog/wp-content/uploads/76c060e312ee1f442192e3816af906f1/Fitness-Wellness-Apps.png?auto=format&auto=compress",
  },
  {
    name: "Footwear",
    page: "footwear.html",
    image: "https://img.businessoffashion.com/resizer/v2/KZBJEPYKPBGQ3PMG4AZQY3P6KM.png?auth=54fa5eb3c2a67e8dd43b7315162c3b88b6361a23e23eaa4acdb956607f2ecf4d&width=1440",
  },
  {
    name: "Accessories",
    page: "accessories.html",
    image: "https://i0.wp.com/fashion2apparel.com/wp-content/uploads/2023/10/Fashion-Accessories.jpg?fit=600%2C400&quality=100&ssl=1",
  },
  {
    name: "Jewellery",
    page: "jewellery.html",
    image: "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg",
  },
  {
    name: "Kids",
    page: "kids.html",
    image: "https://www.drewandjonathan.com/wp-content/uploads/2024/05/childrens-educational-toys-thumbnail.jpg",
  },
  {
    name: "Electronics",
    page: "electronics.html",
    image: "https://img.freepik.com/premium-photo/gadgets-accessories-isolated-white-background_1272184-12.jpg",
  },
  {
    name: "Men's Fashion",
    page: "mens-fashion.html",
    image: "https://media.istockphoto.com/id/665032164/photo/flat-lay-of-modern-mens-clothing-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=CVqFStPc5EDNHIqnpYKPm-DaImQVf2VDjl54oPBavK4=",
  },
  {
    name: "Women Ethnic",
    page: "women-ethnic.html",
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/223/591/small/set-of-drawn-women-from-different-ethnic-groups-in-white-dresses-hold-flowers-in-their-hands-modern-flat-illustration-isolated-in-layers-for-postcard-poster-banner-magazine-cover-vector.jpg",
  },
  {
    name: "Women Western",
    page: "women-western.html",
    image: "https://beta.imagesbof.in/wp-content/uploads/2022/05/Picture4-9.png",
  },
  {
    name: "Newly Launcehed",
    page: "newly-launched.html",
    image: "https://www.shutterstock.com/image-vector/new-arrival-banner-poster-sticker-260nw-2456537369.jpg",
  },
  {
    name: "Tranding",
    page: "tranding.html",
    image: "https://cdn.prod.website-files.com/61fb37e7b711d5877396fabd/62290a066c9714837b2aff43_marketing-trends-2022-thumb.png",
  },
  {
    name: "Testing",
    page: "testing.html",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIXlDqpG0FFLlwLnKyQtt7CeYSUc-9PCCRQ&s",
  },
];

function handleCategoryClick(categoryPage) {
  window.location = `/${categoryPage}`
}

// Create HTML for a category item
function createCategoryItem(category, index) {
  return `
    <div class="category-item" onclick="handleCategoryClick('${category?.page}')"   data-index="${index}">
      <img src="${category.image}" alt="${category.name.replace(/<br>/g, " ")}">
      <div class="category-label">${category.name}</div>
    </div>
  `;
}

function initSlider() {
  const slider = document.getElementById("slider");

  categories.forEach((category, index) => {
    slider.innerHTML += createCategoryItem(category, index);
  });

  const itemsHTML = slider.innerHTML;
  slider.innerHTML = itemsHTML + itemsHTML + itemsHTML;

  const totalWidth = categories.length * 120;
  slider.scrollLeft = totalWidth;

  slider.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  const slider = document.getElementById("slider");
  const itemWidth = 120;
  const totalWidth = categories.length * itemWidth;

  if (slider.scrollLeft < itemWidth) {
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft = totalWidth + slider.scrollLeft;
    setTimeout(() => {
      slider.style.scrollBehavior = "smooth";
    }, 50);
  } else if (slider.scrollLeft > totalWidth * 2 - itemWidth) {
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft = slider.scrollLeft - totalWidth;
    setTimeout(() => {
      slider.style.scrollBehavior = "smooth";
    }, 50);
  }
}

function scrollSlider(amount) {
  const slider = document.getElementById("slider");
  slider.scrollBy({
    left: amount,
    behavior: "smooth",
  });
}

function scrollSlider(amount) {
  document.getElementById("slider").scrollBy({
    left: amount,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", initSlider);  