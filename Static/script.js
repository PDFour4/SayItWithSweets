
// Drew inspiration from https://www.w3schools.com/howto/howto_js_slideshow.asp 
// to create the slideshow/carousel
let slideIndex = 1;
let n = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function isValidUSZip(zip) {
    // Regular expression for US ZIP code format: XXXXX or XXXXX-XXXX
    var zipCode = /^\d{5}(?:-\d{4})?$/;
    return zipCode.test(zip);
}

// Updated the function from the labs to fit the content for this website
function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userMobileNumber = document.getElementById("UserMobileNumber");
    var userZipCode = document.getElementById("UserZipCode");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userMobileNumber.checkValidity() || !userZipCode.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you";
    }
}

var L = window.location.href;

if (L.includes("products.html") || L.includes("cakes.html") || L.includes("cookies.html")|| L.includes("cupcakes.html") || L.includes("holidays.html")) {
    showSlides(slideIndex);
    plusSlides(n);
    currentSlide(n);
}

$(document).ready(function () {
    $('#myCheck').change(function () {
        if ($(this).is(':checked')) {
            $('.reveal-if-active').show();
        } else {
            $('.reveal-if-active').hide();
        }
    });
});

const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}