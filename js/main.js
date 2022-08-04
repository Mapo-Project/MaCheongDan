// typing effect
const typingEffectText = `새로운 마포 더 좋은 마포 청년 일자리 사업단`;

let idx = 0;
const text = document.querySelector(".type_effect_text");

const typingEffect = () => {
  if (["새", "좋"].includes(typingEffectText[idx])) {
    text.innerHTML += "<span>";
  }
  if (["새", "로", "운"].includes(typingEffectText[idx])) {
    document.querySelector(".type_effect_text span:nth-child(1)").textContent +=
      typingEffectText[idx++];
  } else if (["좋", "은"].includes(typingEffectText[idx])) {
    document.querySelector(".type_effect_text span:nth-child(2)").textContent +=
      typingEffectText[idx++];
  } else {
    text.innerHTML += typingEffectText[idx++];
  }

  if (idx > typingEffectText.length) {
    idx = 0;
    text.innerHTML = "";
  }
};
setInterval(typingEffect, 250); // typing effect 끝

// home page Youtube API 자동재생
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const video = ["FxgBXQmyIsk", "0Jeob2pKSsU", "s02FZQhzBO8", "ZKYHP3HyTGM"];
/*
FxgBXQmyIsk - 마포 시티 투어 영상
0Jeob2pKSsU - 2022 마포구 관광 홍보영상
s02FZQhzBO8 - Sense of Passion, 마포구 / 도심 6구 관광 홍보영상
ZKYHP3HyTGM - 이중에 한명은 시즈니입니다. 
*/
const randomNumber = Math.floor(Math.random() * video.length);

var section = {
  start: 163, // 반복 시작 시간(초)
  end: 183, // 반복 종료 시간(초)
};

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    playerVars: { autoplay: 1, controls: 0, mute: 1 },
    videoId: "ZKYHP3HyTGM", // 영상 고유 주소
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  player.seekTo(section.start);
  player.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    setTimeout(restartVideoSection, duration * 1000);
  }
}

function restartVideoSection() {
  player.seekTo(section.start);
} // home page Youtube API 자동재생 끝

// scroll down

document
  .querySelector(".home-background__scroll-down-wrapper")
  .addEventListener("click", () => {
    document.querySelector("#mapo-slogan").scrollIntoView({
      behavior: "smooth",
    });
  });

const home = document.querySelector(".nav__logo-wrapper");
home.addEventListener("click", () => {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
});
const introduce = document.querySelectorAll(
  ".nav__dropdown-content.introduce > h2"
);
introduce[0].addEventListener("click", () => {
  document.querySelector("#mapo-slogan").scrollIntoView({
    behavior: "smooth",
  });
});
introduce[1].addEventListener("click", () => {
  document.querySelector("#first-half-status").scrollIntoView({
    behavior: "smooth",
  });
});
const team = document.querySelectorAll(".nav__dropdown-content.team > h2");
team[0].addEventListener("click", () => {
  document.querySelector("#develop-uiux").scrollIntoView({
    behavior: "smooth",
  });
});
team[1].addEventListener("click", () => {
  document.querySelector("#character").scrollIntoView({
    behavior: "smooth",
  });
});
team[2].addEventListener("click", () => {
  document.querySelector("#broadcast").scrollIntoView({
    behavior: "smooth",
  });
});

const ceremony = document.querySelectorAll(
  ".nav__dropdown-content.ceremony > h2"
);
ceremony[0].addEventListener("click", () => {
  document.querySelector("#chungnyun-think").scrollIntoView({
    behavior: "smooth",
  });
});
ceremony[1].addEventListener("click", () => {
  document.querySelector("#Gyeongui-walk").scrollIntoView({
    behavior: "smooth",
  });
});
ceremony[2].addEventListener("click", () => {
  document.querySelector("#Mapocity-tour").scrollIntoView({
    behavior: "smooth",
  });
});
const QnA = document.querySelectorAll(".nav__dropdown-content.QnA > h2");

QnA[0].addEventListener("click", () => {
  document.querySelector("#way-to-come").scrollIntoView({
    behavior: "smooth",
  });
});
QnA[1].addEventListener("click", () => {
  document.querySelector("#contact-us").scrollIntoView({
    behavior: "smooth",
  });
});

// 경의선 걷기, 마포시티투어 사진 슬라이더
let GyeonguiWalkSlider = tns({
  container: ".Gyeongui-walk__slider",
  slideBy: 1, // 하나 굴릴때 나오는 슬라이드 수
  speed: 400,
  nav: false, // 네비바
  controlsContainer: "#Gyeongui-walk__controls",
  prevButton: ".Gyeongui-walk__previous",
  nextButton: ".Gyeongui-walk__next",
  gutter: 30, // 간격
  responsive: {
    // 반응형
    1920: {
      items: 4,
    },
  },
});
let MapocityTourSlider2 = tns({
  container: ".Mapocity-tour__slider",
  slideBy: 1, // 하나 굴릴때 나오는 슬라이드 수
  speed: 400,
  nav: false, // 네비바
  controlsContainer: "#Mapocity-tour__controls",
  prevButton: ".Mapocity-tour__previous",
  nextButton: ".Mapocity-tour__next",
  gutter: 30, // 간격
  responsive: {
    // 반응형
    1920: {
      items: 4,
    },
  },
});

//카카오 맵 api
const container = document.getElementById("kakaomap");
//37.563875 , 126.909335 마청단 위치
const lLat = 37.563875;
const lLon = 126.909335;

//지도생성 셋팅
const options = {
  center: new kakao.maps.LatLng(lLat, lLon), //지도의 중심좌표.
  level: 5,
};

// 커스텀 오버레이에 표시할 내용입니다
// HTML 문자열 또는 Dom Element 입니다
const content = `<a href="https://map.kakao.com/link/map/마포청년일자리사업단,37.563875,126.909335" target="_blank"><div class="overlay-block">
<div class="overlay-container">
  <div class="overlay-wrapper">
    <div class="icon-area">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        class="icon-place"
      >
        <path
          fill-rule="evenodd"
          d="M18.46 15.15a6.62 6.62 0 0 0 1.04-3.56A6.55 6.55 0 0 0 13 5a6.55 6.55 0 0 0-6.5 6.59c0 1.24.35 2.46 1.02 3.52l5.14 6.72c.17.23.5.23.68 0l5.12-6.68zM13 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        ></path>
      </svg>
    </div>
    <div class="text-area">
      <div class="maintext-place">
        <div class="maintext">마포청년일자리사업단</div>
      </div>
    </div>
  </div>
</div>
<div class="overlay-pointer"></div>
</div></a>`;

// 커스텀 오버레이가 표시될 위치입니다
const position = new kakao.maps.LatLng(lLat, lLon);

// 커스텀 오버레이를 생성합니다
const customOverlay = new kakao.maps.CustomOverlay({
  position: position,
  content: content,
  xAnchor: 0.11,
  yAnchor: 1.3,
});

// 지도 속성
const showKakaomapButton = `지도보기
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 13 13"
  class="show-kakaomap-marker"
  aria-hidden="true"
>
  <path
    fill-rule="evenodd"
    d="M1 11.3L4.68 7.6a.5.5 0 0 1 .7.7L1.72 12H5.5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v3.8zm11-9.6L8.32 5.4a.5.5 0 0 1-.7-.7L11.28 1H7.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0V1.7z"
  ></path>
</svg>`;
let showKakaomapAnchor = document.createElement("a");
showKakaomapAnchor.classList = "show-kakaomap";
showKakaomapAnchor.href =
  "https://map.kakao.com/link/map/마포청년일자리사업단,37.563875,126.909335";
showKakaomapAnchor.target = "_blank";
showKakaomapAnchor.innerHTML = showKakaomapButton;

container.appendChild(showKakaomapAnchor);

const map = new kakao.maps.Map(container, options);
const changePosition = new kakao.maps.LatLng(lLat, lLon);

map.setZoomable(false);
customOverlay.setMap(map);
map.panTo(changePosition);

// email placeholder trick
const namePlaceholder = document.querySelector(
  ".email__input-name-placeholder"
);
const nameInput = document.querySelector(".email__input-name");
const emailPlaceholder = document.querySelector(
  ".email__input-email-placeholder"
);
const emailInput = document.querySelector(".email__input-email");
function hideName() {
  namePlaceholder.style.display = "none";
}
const messagePlaceholder = document.querySelector(
  ".email__input-message-placeholder"
);
const messageInput = document.querySelector(".email__input-message");
function hideName() {
  namePlaceholder.style.display = "none";
}
function visibleName() {
  if (!nameInput.value) {
    namePlaceholder.style.display = "inline-block";
  } else {
    hideName();
  }
}
function hideEmail() {
  emailPlaceholder.style.display = "none";
}
function visibleEmail() {
  if (!emailInput.value) {
    emailPlaceholder.style.display = "inline-block";
  } else {
    hideEmail();
  }
}
function hideEmail() {
  emailPlaceholder.style.display = "none";
}
function visibleEmail() {
  if (!emailInput.value) {
    emailPlaceholder.style.display = "inline-block";
  } else {
    hideEmail();
  }
}
function hideMessage() {
  messagePlaceholder.style.display = "none";
}
function visibleMessage() {
  if (!messageInput.value) {
    messagePlaceholder.style.display = "inline-block";
  } else {
    hideMessage();
  }
}

nameInput.addEventListener("focus", hideName);
nameInput.addEventListener("blur", visibleName);
emailInput.addEventListener("focus", hideEmail);
emailInput.addEventListener("blur", visibleEmail);
messageInput.addEventListener("focus", hideMessage);
messageInput.addEventListener("blur", visibleMessage);
