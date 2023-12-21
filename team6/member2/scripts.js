// 창이 로드될 때 실행되는 이벤트 리스너를 추가합니다.
window.addEventListener("load", function () {
    // 네비게이션 엘리먼트를 선택합니다.
    let elNavi = document.querySelector(".header > ul");
  
    // 모든 섹션 엘리먼트를 선택합니다.
    let aElSection = document.querySelectorAll(".main > section");
  
    // 현재 섹션 인덱스를 나타내는 변수를 초기화합니다.
    let curSIdx = 0;
  
    // 휠 이벤트에 대한 타이머 변수를 초기화합니다.
    let wheelTimer;
  
    // 창에서 휠 이벤트가 발생할 때의 이벤트 리스너를 추가합니다.
    window.addEventListener("wheel", function (e) {
      // 이전에 설정된 타이머를 제거합니다.
      clearTimeout(wheelTimer);
  
      // 새로운 타이머를 설정하고, 50ms 이후에 스크롤 처리 함수를 호출합니다.
      wheelTimer = setTimeout(function () {
        // 휠의 방향에 따라 스크롤 처리 함수를 호출합니다.
        if (e.deltaY < 0) doScroll(--curSIdx);
        else doScroll(++curSIdx);
      }, 500);
    });
  
    // 스크롤을 처리하는 함수를 정의합니다.
    function doScroll(sidx) {
      // 인덱스가 0보다 작으면 0으로 설정합니다.
      sidx = sidx < 0 ? 0 : sidx;
  
      // 인덱스가 섹션의 개수보다 크면 가장 큰 인덱스로 설정합니다.
      sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;
  
      // 현재 섹션 인덱스를 업데이트합니다.
      curSIdx = sidx;
  
      // 현재 섹션으로 스크롤하는 애니메이션을 부드럽게 적용합니다.
      aElSection[curSIdx].scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth",
      });
    }
  
    // 텍스트 컨테이너 엘리먼트를 가져옵니다.
    const textContainer = document.getElementById('text-container');
  
    // 텍스트 내용을 정의합니다.
    const textContent = "세상을 위한 개발자";
  
    // 각 글자에 대한 각도 생성 및 스타일을 적용하는 루프를 실행합니다.
    for (let i = 0; i < textContent.length; i++) {
      // span 엘리먼트를 생성합니다.
      const letter = document.createElement('span');
  
      // 글자를 span 엘리먼트에 추가합니다.
      letter.textContent = textContent[i];
  
      // 'animatedLetter' 클래스를 추가합니다.
      letter.classList.add('animatedLetter');
  
      // 0도에서 360도 사이의 난수를 생성합니다.
      const randomAngle = Math.floor(Math.random() * 361);
  
      // '--random-angle' CSS 변수에 랜덤 각도를 적용합니다.
      letter.style.setProperty('--random-angle', `${randomAngle}deg`);
  
      // 변환에 대한 트랜지션을 설정합니다.
      letter.style.transition = 'transform 0.5s ease-in-out';
  
      // 텍스트 컨테이너에 span 엘리먼트를 추가합니다.
      textContainer.appendChild(letter);
    }
  });
  
