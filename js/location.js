//카카오 맵 api 시작
//37.563875 , 126.909335 마청단 위치
var container = document.getElementById('kakaomap'); //지도를 담을 영역의 DOM 레퍼런스
let lLat = 37.563875;
let lLon = 126.909335;

//지도생성 셋팅
const options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(lLat, lLon), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

//마커이미지 셋팅
const imageSrc = './images/pin.png'; // 마커이미지의 주소입니다    
const imageSize = new kakao.maps.Size(20, 30); // 마커이미지의 크기입니다
const imageOption = { offset: new kakao.maps.Point(10, 30) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

//마커옵션 셋팅
const markerOptions = {
    position: new kakao.maps.LatLng(lLat, lLon),
    image: markerImage
};

//커스텀 오버레이 셋팅
const coContent = '<div class="infoContent">마포청년일자리사업단</div>'
const coPosition = new kakao.maps.LatLng(lLat, lLon);
// const iwRemoveable = false;
const iwOptions = {
    position: coPosition,
    content: coContent,
    xAnchor: 0.5,
    yAnchor: 2,
};

//지도 객체생성 &객체 리턴
const map = new kakao.maps.Map(container, options);
//마커 객체생성 &객체 리턴
const marker = new kakao.maps.Marker(markerOptions);
//인포윈도우 객체생성& 객체 리턴
const customOverlay = new kakao.maps.CustomOverlay(iwOptions);

const changePosition = new kakao.maps.LatLng(lLat, lLon);
marker.setMap(map);
customOverlay.setMap(map);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();

// 지도에 컨트롤을 추가해서 지도위에 표시됩니다
//맵 타입[지도, 스카이뷰] 컨트롤러 추가
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
//줌버튼 컨트롤러 추가
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
//마우스휠을 사용한 확대 축소 금지
map.setZoomable(false);
//해당 포지견으로 맵 중심을 이동시깁니다.
map.panTo(changePosition);
//카카오 맵 종료
