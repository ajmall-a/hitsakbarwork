// video playback speed
    document.querySelector('video').playbackRate = 2;

// navbar toggle button
    const menuBtn = document.querySelector(".menu-btn")
    const navigation = document.querySelector(".navigation")

    menuBtn.addEventListener("click", ()=>{
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");

    
    });

// video slider
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){

        btns.forEach((btn)=> {
            btn.classList.remove("active")
        });

        slides.forEach((slide)=> {
            slide.classList.remove("active")
        });

        contents.forEach((content)=> {
            content.classList.remove("active")
        });


        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");

    }

    btns.forEach((btn, i)=>{
        btn.addEventListener("click", ()=>{
            sliderNav(i);
    });

});

// parallax effect
document.addEventListener("DOMContentLoaded", function() {
    let parallax = document.querySelector(".parallax");
  
    window.addEventListener("scroll", function() {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  });


//   contact section
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
