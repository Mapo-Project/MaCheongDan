// typing effect
const typingEffectText = `새로운 마포, 더 좋은 마포 청년 일자리 사업단`;

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
setInterval(typingEffect, 500); // typing effect 끝

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
