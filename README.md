# 마포 청년 일자리 사업단

## 프로젝트 소개.

- 2022 마포청년일자리 사업단 홈페이지입니다
- 1920 x 1080 크기 화면에 맞춰 제작되었습니다.
- [Live Demo](https://mapo-project.github.io/MaCheongDan/)를 통해 페이지를 확인 할 수 있습니다.
- 이 프로젝트는 마포구 청년 일자리 사업단의 지원으로 제작되었습니다.

---

개발기간 : 2022.07 ~ 2022.08
개발인원 : 3인

- 기획 / 디자인 : 임창운
- 마크업 : 강대국, 김연준

---

## 개발환경 및 사용툴.

- HTML, CSS, JavaScript
- node, webpack
- Visual Studio code
- Git, Github, Github-page
- notion, slack
- Figma

---

## 주요기능.

- multi page static website

- 2022 마포 청년 일자리 사업단 소개와 각 팀별 프로젝트 및 활동 내역을 전달합니다.

- Contact us를 통해 관리자에게 이메일을 보낼 수 있습니다.

---

## 이슈.

< 협업 >

- figma로 된 디자인 마크업

- 디자이너 및 개발자와 협업

- Git협업 플로우 습득 및 PR 요청, 관리

< HTML >

- HTML sementic tag

- input tag required attribute

- html5 video tag 고프로 mp4 파일 H265 코덱 오류 경험

< CSS >

- css IBM convention 사용

- flex-wrap

- custom borderline

- gradient border-line button

< JavaScript >

- multi line typing effect

- custom placeholder

- tiny-slider library

- Youtube API 이용 youtube 영상 iframe으로 출력

- Google email API 이용 contact us 구현

- scrollIntoView를 이용한 nav bar 구현

- Kakao map API 이용 custom map 구현

< 최적화 >

- webpack 이용 번들링, assets minimize, babel 적용

- image lazy loading

- font preloading, woff/woff2 font-type

- image, video size 압축

- google Lighthouse 성능 92점

성능 최적화에 대해 [개인블로그](https://umcondo.github.io/)에 정리해 놓았습니다.

---

## 후기.

- 디자이너와 협업하며 디자인을 조율하는 경험을 해볼 수 있었습니다. 디자인의 의도를 묻고, 적절한 타협을 통해 마크업을 진행하였습니다.

- IEM이라는 css convention을 스스로 정해서 적용했습니다. 모두 세세하게 규칙을 지키지는 못했으나 css convention을 정해서 마크업을 하니 코드가 읽기 쉬워졌고, css 클래스네이밍에도 신경쓸 수 있었습니다.

- video태그를 쓰면서 HTML5에 추가된 기능에 대해 공부했습니다. 또한 유튜브 API를 통해 영상을 iframe으로 보여주는 것과 video태그를 사용하는 것의 장단점을 생각해볼 수 있었습니다. video태그를 쓰면 일일이 파일 사이즈를 압축시켜야하는 번거로움이 있습니다. 하지만 캐싱을 이용할 수 있으므로 처음 자원을 응답받으면 두번째부터는 매번 요청을 보내야하는 iframe에 비해서 빠릅니다. 또한 video 파일들을 서버에서 관리할 수 있는 점이 장점이 될 수 있습니다. 이미 유튜브에 올려있지 않은 영상의 경우 일일이 유튜브에 올려야 하고, 저작권을 검토해야하는 작업이 번거롭습니다. 유튜브 iframe의 경우 유튜브 기본 UI에서 커스터마이징하기 힘들다는 단점이 있습니다.

- 원하는 요소로 페이지 이동을 구현할때, 요소의 id를 이용한 a tag href 방식과 DOM 요소의 scrollIntoView web API의 차이를 생각해보았습니다. a tag 방식은 url에 해당 요소의 위치가 나타나므로 해당 요소의 위치를 공유할때 유용하다고 생각했습니다. a tag는 scroll-behavior : 'smooth'를 별도로 설정해주어야 합니다. scrollIntoView는 프로퍼티를 통해 smooth를 쉽게 구현할 수 있었습니다. 또한 원하는 요소의 가장자리 어느 곳으로 이동할지도 설정할 수 있습니다. url을 바꾸지도 않으므로 nav bar를 구현할때 더 적절하다고 생각했습니다.

- custom borderline, gradient border-line button을 구현하며 css trick에 대해 익힐 수 있었습니다.

- webpack 5를 설정하며 모듈과 번들링이 무엇인지 경험했습니다. webpack이 제공하는 plugin들을 통해 성능을 최적화하였습니다. 코드스플리팅, 청크에 대한 이해가 부족했습니다. 천천히 공부해서 적용해 보려 합니다.

- 성능 최적화를 위해 여러 기법들을 적용해 보았고, 성공적인 성능 개선을 할 수 있었습니다. 앞으로도 꾸준히 성능개선에 신경을 쓰려합니다.

- 1920 x 1080에 맞춰 개발하느라 반응형 레이아웃을 전혀 고려하지 않았습니다. 다음에는 모바일, 노트북 등 반응형을 고려하며 마크업을 하려 합니다. 혹은 디자인, 기획에 있어 좀 더 소통해야겠다고 느꼈습니다.
