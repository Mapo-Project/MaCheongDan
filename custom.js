// 모바일 햄버거
$(function () {
  $(".trigger").click(function () {
    $(this).toggleClass("active");
  });
});

// 플랜 슬라이더
$(".history-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// 프로젝트 슬라이드
$(".project-photo").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 1300,
  cssEase: "linear",
});

// 글자타이핑

// const content = "안녕하세요 마포 청년 일자리 사업단 입니다.";
// const text = document.querySelector(".text_box");
// let i = 0;

// function typing() {
//   let txt = content[i++];
//   text.innerHTML += txt;
//   if (i > content.length) {
//     text.textContent = "";
//     i = 0;
//   }
// }
// setInterval(typing, 200);
