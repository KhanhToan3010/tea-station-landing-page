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