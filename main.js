const slider_images = document.querySelectorAll('.top-slider-img');
const prev_button = document.querySelector('.prev');
const next_button = document.querySelector('.next');

let n = 0;

  function reset() {
    for (let i = 0 ; i < slider_images.length ; i++ ){
        slider_images[i].style.display="none";
    }
  }
 

  const updateImage = () => {
    reset();
    slider_images[0].style.display = "block";
  }
  const previous = () => {
    reset();
    slider_images[n-1].style.display = "block";
    n--;
  };
  const next = () => {
    reset();
    slider_images[n+1].style.display = "block";
    n++;
  };
  
  prev_button.addEventListener('click', (e) =>{
    if(n === 0) {
        n = slider_images.length;
    }
    previous();
  });

    next_button.addEventListener('click', (e) =>{
    if(n === slider_images.length - 1) {
        n = -1;
    }
    next();
  });


updateImage();