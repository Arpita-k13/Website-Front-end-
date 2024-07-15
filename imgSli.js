var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let count = 0;
const ReplacedImg = (x) => {
  const getImage = document.getElementById("imgContent");
  getImage.src = `https://digitalsparkagency.netlify.app/Assets/images/${x}.png`;
};

function showModal() {
  document.querySelector(".overlay").classList.add("showOverlay");
  document.querySelector(".container").classList.add("showContainer");
  document.querySelector(".swiper").classList.add("hideSwipperSlide");
}
function closeModal() {
  document.querySelector(".overlay").classList.remove("showOverlay");
  document.querySelector(".container").classList.remove("showContainer");
}
