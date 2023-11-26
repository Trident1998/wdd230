let slideIndex1 = 1;
showSlides1(1, 1);

function plusSlides(n, slider) {
  if (slider === 1) {
    showSlides1(slideIndex1 += n, 1);
  } else if (slider === 2) {
    showSlides2(slideIndex2 += n, 2);
  }
}

function currentSlide(n, slider) {
  if (slider === 1) {
    showSlides1(slideIndex1 = n, 1);
  } else if (slider === 2) {
    showSlides2(slideIndex2 = n, 2);
  }
}

function showSlides1(n, slider) {
  let i;
  let slides = document.getElementsByClassName(`mySlides${slider}`);
  let dots = document.getElementsByClassName(`dot${slider}`);

  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}

