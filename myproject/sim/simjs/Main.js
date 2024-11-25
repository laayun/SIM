// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
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
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

/*스크롤 반응 애니메이션 section1(밑에서 위로 올라오는 애니메이션)*/
const articles = document.querySelectorAll(".article");

const articleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 });

articles.forEach(article => {
  articleObserver.observe(article);
});


/*가로 슬라이드*/

let slider = document.querySelector(".section3")
let innerSlider = document.querySelector(".section3-inner")
let pressed = false
let startx
let x

slider.addEventListener("mousedown", e => {
  pressed = true
  startx = e.offsetX - innerSlider.offsetLeft
  slider.style.cursor = "grabbing"
})

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab"
})

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab"
})

window.addEventListener("mouseup", () => {
  pressed = false
})

slider.addEventListener("mousemove", e => {
  if (!pressed) return
  e.preventDefault()
  x = e.offsetX

  innerSlider.style.left = `${x - startx}px`
  checkboundary()
})

function checkboundary() {
  let outer = slider.getBoundingClientRect()
  let inner = innerSlider.getBoundingClientRect()

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px"
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`
  }
}



/*--------페이지 나타내기--------*/
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면에 들어옴
        entry.target.classList.add("fade-in");
      } else {
        // 화면에서 나감
        entry.target.classList.remove("fade-in");
      }
    });
  },
  // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
  { threshold: 0.1 }
);

// 관찰 대상 설정
const targetElements = document.querySelectorAll(".section3-inner");
targetElements.forEach((element) => {
  observer.observe(element);
});