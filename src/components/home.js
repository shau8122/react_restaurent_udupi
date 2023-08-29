import img2 from './images/left.png';
import img3 from './images/bag1.png';
import img4 from './images/bag2.png';
import img5 from './images/bag3.png';
import img6 from './images/right.png';
import './css/home .css';
function home(){
  // const slideWidth = slides[0].getBoundingClientRect().width;
  // const arrangeSlide= (num,slide) =>{
  //   slide.style.left= num * {slideWidth} + "px";
  // }
// const track = document.querySelectorAll(".carousel-track");
// const slides = Array.from(track.children);
// const nextButton = document.querySelector(".carousel-btn-right");
// const prevButton = document.querySelector(".carousel-btn-left");
// const dotNav = document.querySelector(".carousel-nav");
// const dotBtn = Array.from(dotNav.children);
// const slideWidth = slides[0].getBoundingClientRect().width;
// for (var i = 0; i < slides.length; i++) {
//   arrangeSlide(i, slides[i]);
// }
// function arrangeSlide(num, slide) {
//   slide.style.left = num * slideWidth + "px";
// }
// // when i click to the left move slide to the left
// prevButton.addEventListener("click", moveSlidePrev);

// function moveSlidePrev() {
//   const currentSlide = track.querySelector(".current-slide");
//   const prevSlide = currentSlide.previousElementSibling;
//   const amountToMove = prevSlide.style.left;

//   track.style.transform = "translateX(-" + amountToMove + ")";
//   currentSlide.classList.remove("current-slide");
//   prevSlide.classList.add("current-slide");
//   const currentDot=dotNav.querySelector('.current-slide');
//   const prevDot=currentDot.previousElementSibling;
//   const prevIndex =slides.findIndex(slide => slide===prevSlide);
//   hideShow(slides,prevButton,nextButton, prevIndex);
//   updateDot(currentDot,prevDot);
// }
// const updateDot =(currentDot,targetDot)=> {
//   currentDot.classList.remove('current-slide');
//   targetDot.classList.add('current-slide');
// }
// const hideShow = (slides,prevButton,nextButton,targetIndex) =>{
//   if(targetIndex===0){
//     prevButton.classList.add('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   } else if (targetIndex === slides.length -1){
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.add('is-hidden');
//   } else {
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   }
// }
// // when i click to right move slide to right
// nextButton.addEventListener("click", moveSlideNext);

// function moveSlideNext() {
//   const currentSlide = track.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;
//   const amountToMove = nextSlide.style.left;
//   track.style.transform = "translateX(-" + amountToMove + ")";
//   currentSlide.classList.remove("current-slide");
//   nextSlide.classList.add("current-slide");
//   const currentDot=dotNav.querySelector('.current-slide');
//   const nextDot=currentDot.nextElementSibling;
//   const nextIndex= slides.findIndex(slide => slide===nextSlide);

//   updateDot(currentDot,nextDot);
//   hideShow(slides,prevButton,nextButton,nextIndex);
// }
// dotNav.addEventListener("click", (e) => {
//   const targetDot = e.target.closest("button");

//   if (!targetDot) return;
//   const currentSlide = track.querySelector(".current-slide");
//   const currentDot = dotNav.querySelector(".current-slide");
//   const targetIndex = dotBtn.findIndex(dot => dot === targetDot);
//   console.log(targetIndex);
//   const targetSlide = slides[targetIndex];
//   const amountToMove = targetSlide.style.left;
//   track.style.transform = "translateX(-" + amountToMove + ")";
//   currentSlide.classList.remove("current-slide");
//   targetSlide.classList.add("current-slide");

//   updateDot(currentDot,targetDot);
//   hideShow(slides,prevButton,nextButton,targetIndex);

// });

// // when i click to nav indicator move to that slide

  return(
    <div id="home" className="box">
      <button className="carousel-btn carousel-btn-left is-hidden">
        <img src={img2} alt="left"/>
      </button>
      <div className="home-text">
        <h1 className="primary-h">
          Udupi Restaurent
        </h1>
        <h2>Experiance Best Service In All Over India</h2>
        <div className="btn">
          <a href="#aboutus">Explore</a>
        </div>
      </div>
      <div className="carousel-track-container">
        <div className="carousel-track">
          <div className="carousel-slide current-slide">
            <img className="carousel-image" src={img3} alt="bag1"/>
          </div>
          <div className="carousel-slide">
            <img className="carousel-image" src={img4} alt="bag2"/>
          </div>
          <div className="carousel-slide">
            <img className="carousel-image" src={img5} alt="bag3"/>
          </div>
        </div>
      </div>
      <button className="carousel-btn carousel-btn-right">
        <img src={img6} alt="right"/>
      </button>
      <div className="carousel-nav">
        <button className="carousel-indicator current-slide">
        </button>
        <button className="carousel-indicator">
        </button>
        <button className="carousel-indicator">
        </button>
      </div>
    </div>
  );
}
export default home;