import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";


/* ================
Nav
================ */
$(function (){
  // show/hide nav
  //$(".navbar").hideScroll();

  //mobile nav toggle
  const toggleBtn = $("#toggle_btn");
  const dropdownMenu = $(".dropdown-menu");

  toggleBtn.click(() => {
    console.log("Hamburger icon clicked");
    dropdownMenu.toggleClass("open");
  })
});

/* ================
PARTNER LOGOS
================ */

$(function () {
  const container = document.getElementById("partner-logo-list");
  partnerLogos.forEach((logo) => {
    const img = document.createElement("img");
    img.src = partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add("logo-ticket-image");
    container.appendChild(img);
  })
})

/* ================
Products Tabs
================ */

$(function (){
  // add active class to the first tab
  //$('#product-tabs').find('li:first').addClass('activeTab');
  $("li:first").addClass("activeTab");
  // click change color of the first tab
  $("li").on("click", function(){
    $("li").removeClass("activeTab");
    $('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab");
  });

  $("#products-tabs").responsiveTabs({
   animation: 'slide'
});
})

/* ================
Best Sellers
================ */
$(function (){
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    
})
})

/* ================
Statistics Counter
================ */

$(function (){
  const counterUp  = window.counterUp.default;

  const callback = (entries) => {
    entries.forEach( (entry) => {
      const el = entry.target
      if ( entry.isIntersecting && !el.classList.contains('is-visible')) {
        counterUp( el, {
          duration: 2000,
          delay: 16,
        } )
        el.classList.add('is-visible')
      }
    } )
  }
  
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  
  const el = document.querySelectorAll('.counter').forEach((node) => IO.observe(node))
  // IO.observe(el)
})


/* ================
All Products
================ */

$(function (){
  productList.map((product) => {
    $("#product-item--container").append(`
            <div data-filterable data-filter-category=${product.category}
            class="relative col-span-3 overflow-hidden group hover:shadow-md">
              <div class="portfolio-item">
                <div>
                  <img 
                    src=${product.img}
                    alt="product-img" />

                    <div class="product-item-overlay">
                      <div class="product-details">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                      </div>
                    </div>
                </div>
              </div>
             </div>
      `)
  })
  $.fn.filterjitsu();

  // Active tab
  function getAllUrlParams(url) {
    url = url || window.location.href;
    const param = {};

    const queryString = url.split("?")[1];
    if (!queryString) {
      return param;
    }

    const [key, value] = queryString.split("=");
    if(key) {
      param[key] = value ? value : "";
    }
    return param;
  }

  const urlParam = getAllUrlParams();

  $("#allProduct-filters a").removeClass("activeFilter")

  const category = urlParam["filter-category"];

  switch (category) {
    case "whitetea":
      $("#f-whitetea").addClass("activeFilter");
      break;
    case "blacktea":
      $("#f-blacktea").addClass("activeFilter");
      break;
    case "oolong":
      $("#f-oolong").addClass("activeFilter");
      break;
    case "matcha":
      $("#f-matcha").addClass("activeFilter");
      break;
    default:
      $("#f-all").addClass("activeFilter");
      break;
  }

})