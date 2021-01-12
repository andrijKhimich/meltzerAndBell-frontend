const humburger = document.querySelector(".humburger");
const roundText = document.querySelector("#roundText");
const testimonialsSlider = document.querySelector('#testimonialsSlider');
const caseSlider = document.querySelector('#caseSlider');
const blogSlider = document.querySelector('#blogSlider');
const practiceSlider = document.querySelector('#practiceSlider');
const sidebarAccordion = document.querySelector('#sidebarAccordion');
const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
const navItems = document.querySelectorAll('.nav-list__link');
const submenu = document.querySelectorAll('.nav-sublist');



// function changeMenuText() {
//   menuBtn.style.color = '#191919';
//   menuBtn.innerText = "close"
// }

function openMenu() {
  menuBtn.classList.add('active');
  menuBtn.innerText = "close";
  nav.classList.add("open");
}

function closeMenu() {
  menuBtn.classList.remove('active');
  menuBtn.innerText = "menu";
  nav.classList.remove("open");
  navItems.forEach(function (element) {
    element.classList.remove("active");
  });
  submenu.forEach(function (element) {
    element.classList.remove("active");
  });
}

function openSubMenu() {
  // nav.classList.add("open")
  // e.target.classList.add('active');
  // console.log(e.target);
  // submenu.classList.add('active');
}

// rounded words on firs screen
function circularWords(words) {
  const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };

  const radius = 80;
  const diameter = radius * 2;

  const circle = words;
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;

  const text = circle.innerText;
  const characters = text.split("");
  circle.innerText = null;

  const startAngle = -90;
  const endAngle = 270;
  const angleRange = endAngle - startAngle;

  const deltaAngle = angleRange / characters.length;
  let currentAngle = startAngle;

  characters.forEach((char, index) => {
    const charElement = document.createElement("span");
    charElement.innerText = char;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;
    charElement.style.transform = `${transform} ${rotate}`;

    currentAngle += deltaAngle;
    circle.appendChild(charElement);
  });
}

function showContent() {
  document.querySelector(".main-wrapper").classList.remove("js-fadeIn");
}

document.addEventListener("DOMContentLoaded", function (e) {


  menuBtn.addEventListener('click', function () {
    if (this.classList.contains("active")) {
      // changeMenuText();
      closeMenu();
    } else {
      openMenu();
    }
  });

  navItems.forEach(function (link) {
    link.addEventListener('click', function () {
      navItems.forEach(function (element) {
        element.classList.remove("active");
      });
      this.classList.add('active');

      submenu.forEach(function (sublist) {
        sublist.classList.remove("active");
      });
      const sublist = this.nextSibling.nextSibling;
      console.log(sublist);
      if (sublist != null) {
        sublist.classList.add('active');
      }

    });
  })


  if (sidebarAccordion) {
    const accordionWrapper = document.querySelector('.sidebar-accordion__wrapper');
    const accordionLink = accordionWrapper.querySelectorAll('.sidebar-accordion__link');

    function accordionToggle(e) {
      e.preventDefault();
      const accordionContent = this.nextSibling.nextSibling;
      if (accordionContent.classList.contains('show')) {
        this.classList.remove("minus");
        accordionContent.classList.remove("show");
      } else {
        this.classList.add("minus");
        accordionContent.classList.add("show");
      }
    }

    for (var i = 0; i < accordionLink.length; i++) {
      accordionLink[i].addEventListener("click", accordionToggle);
    }
  }

  // }

  showContent();
  if (roundText) {
    circularWords(roundText);
  }

  // if (partnersSlide) {
  initPartnersSlider();
  // }

  initTestimonialsSlider();
  initPressSlider();
  initCaseSlider();
  initBlogSlider();
  initPracticeSlider();

  // humburger.addEventListener("click", function () {
  //   if (this.classList.contains("open")) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });


  window.addEventListener('resize', function (event) {
    initPartnersSlider();
    initPressSlider();
  });



  function initPartnersSlider() {
    const partnerSlider = document.querySelector('#partnerSlider.slick-slider');
    if (window.innerWidth < 991 && !partnerSlider) {
      $('#partnerSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
        autoplaySpeed: 10000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 2,
              dots: true
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      });
    }
  }

  function initPressSlider() {
    const partnerSlider = document.querySelector('.press__slider.slick-slider');
    if (window.innerWidth < 991 && !partnerSlider) {
      $('#pressSlider').slick({
        // slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        // dots: false,
        arrows: false,
        infinite: false,
        autoplaySpeed: 10000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 4,
               dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      });
    }
  }


  $('#map')[0] ? initMap() : null;

  function initMap() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(26.114650055305212, -80.14133413459079),
      disableDefaultUI: true,
      styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#e9e9e9"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
              "color": "#f5f5f5"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
              "color": "#f5f5f5"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
              "color": "#dedede"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "visibility": "on"
            },
            {
              "color": "#ffffff"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
              "saturation": 36
            },
            {
              "color": "#333333"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
              "color": "#f2f2f2"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#fefefe"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#fefefe"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        }
      ]
    };
    var mapElement = document.getElementById('map')
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(26.114611520965816, -80.14121611739628),
      map: map,
      title: 'Meltzer and Bell, P.A',
      icon: '../img/svg/map-point.svg'
    });
  }
});

function initTestimonialsSlider() {
  const counter = document.querySelector('#testimonialsSliderInfo');
  $(testimonialsSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $(testimonialsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 800,
    fade: true,
    arrows: true,
    prevArrow: $('#testimonialsPrev'),
    nextArrow: $('#testimonialsNext'),
    responsive: [{
      breakpoint: 991,
      settings: {
        adaptiveHeight: true
      }
    }]
  });
}

function initPracticeSlider() {
  const counter = document.querySelector('#practiceSliderInfo');
  $(practiceSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $('#practiceSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 800,
    fade: true,
    arrows: true,
    prevArrow: $('#ptacticePrev'),
    nextArrow: $('#ptacticeNext'),
    responsive: [{
      breakpoint: 575,
      settings: {
        adaptiveHeight: true
      }
    }]
  });
}

function initCaseSlider() {
  const counter = document.querySelector('#caseSliderInfo');
  $(caseSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $('#caseSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 1000,
    arrows: true,
    prevArrow: $('#casePrev'),
    nextArrow: $('#caseNext'),
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}

function initBlogSlider() {
  const counter = document.querySelector('#blogSliderInfo');
  $(blogSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;

    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });
  $('#blogSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 1000,
    arrows: true,
    prevArrow: $('#blogPrev'),
    nextArrow: $('#blogNext'),
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}

svg4everybody();

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});