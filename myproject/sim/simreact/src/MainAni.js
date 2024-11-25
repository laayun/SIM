export function setupSlideAnimation() {
  // 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 요소가 존재하는지 확인
if (!prevBtn) {
  console.error("Error: Previous button element not found.");
  return;
}

if (!nextBtn) {
  console.error("Error: Next button element not found.");
  return;
}

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

 // 페이지네이션 생성
 const pagination = document.querySelector(".slide_pagination");

 // 보이는 페이지네이션의 최대 개수 설정
 const maxVisiblePagination = 5;

 // 현재 슬라이드 개수와 보이는 페이지네이션의 최대 개수 중 작은 값을 선택
 const pageCount = Math.min(maxSlide, maxVisiblePagination);

 // 기존에 있던 페이지네이션을 모두 삭제
 while (pagination.firstChild) {
   pagination.removeChild(pagination.firstChild);
 }

 for (let i = 0; i < pageCount; i++) {
   const li = document.createElement("li");
   li.textContent = "•";
   if (i === 0) li.classList.add("active");
   pagination.appendChild(li);
 }

 const paginationItems = document.querySelectorAll(".slide_pagination > li");
 console.log(paginationItems);


// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 현재 i의 값을 캡처하는 클로저를 만듭니다.
  const handleClick = (index) => {
    return () => {
      // 이 함수 내에서 캡처된 i 값을 사용합니다 (index로 지칭)
      currSlide = index + 1;
      const offset = slideWidth * (currSlide - 1);
      slideItems.forEach((item) => {
        item.setAttribute("style", `left: ${-offset}px`);
      });
      paginationItems.forEach((item) => item.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    };
  };

  // 반환된 함수를 이벤트 리스너에 할당합니다.
  paginationItems[i].addEventListener("click", handleClick(i));
}
}