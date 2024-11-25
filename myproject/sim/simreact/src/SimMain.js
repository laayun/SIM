import React, { useState, useEffect, useRef } from 'react';
import './css/Main.css';
import { Link } from 'react-router-dom';
import { setupSlideAnimation } from './MainAni.js';

/* 1. 가로 슬라이드 기능 안됨. 화살표눌러서 넘기는 슬라이드(화살표 누르면 안넘어감), 
커서로 잡고 넘기는 슬라이드(이미지가 안뜨고 작동이 되는지도 모르겠음) 2개
2. css 겹침 문제. 이것 때문에 배경 hover 하면 글씨 잘뜨게하는 기능이 안되는듯.(제일 문제)
다 끝나면 
*/


const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1521820298019-160c4bc0dc91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNoaXJ0cyUyMHdvbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1600973964462-0cf10488d440?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1559127452-7a36e5f88484?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQyfHxmYXNoaW9ufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1515745941901-0c81bd6cd402?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1548534796-12615d80396c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1559334417-a57bd929f003?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1691622500878-15ee2528ab38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1523260578934-e9318da58c8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ2fHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzcyfHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600089286015-fa904ad1b4bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTExfHxzaGlydHMlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  ];


  const articleRef = useRef(null);
  const sliderRef = useRef(null);
  const innerSliderRef = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    
    // 다른 애니메이션 초기화 함수들을 호출
    setupSlideAnimation();
  }, []);

  useEffect(() => {
    /* 밑에서 위로 올라오게하는 애니메이션*/
    const articles = articleRef.current.querySelectorAll('.article');

    const articleObserver = new IntersectionObserver((entries) => {
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

    return () => {
      articles.forEach(article => {
        articleObserver.unobserve(article);
      });
    };
  }, []);

  // IntersectionObserver 적용
  const targetRef = useRef([]); // 배열로 초기화

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    targetRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      targetRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const innerSlider = innerSliderRef.current;

    innerSlider.style.left = '0px';

    const handleMouseDown = (e) => {
      setPressed(true);
      setStartX(e.offsetX - innerSlider.offsetLeft);
      slider.style.cursor = 'grabbing';
    };

    const handleMouseEnter = () => {
      slider.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      slider.style.cursor = 'grab';
      setPressed(false);
    };

    const handleMouseMove = (e) => {
      if (!pressed) return;
      e.preventDefault();
      const x = e.clientX - slider.getBoundingClientRect().left;
      const moveX = x - startX;

      innerSlider.style.left = `${moveX}px`;
      checkBoundary();
    };

    const checkBoundary = () => {
      const outer = slider.getBoundingClientRect();
      const inner = innerSlider.getBoundingClientRect();

      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    };

    // 이벤트 리스너 추가
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [pressed, startX]);


  return (
    <div id="wrap">
      <main>
        <div className="slide slide_wrap">
          <div className="slide_item">슬라이드 1</div>
          <div className="slide_item">슬라이드 2</div>
          <div className="slide_item">슬라이드 3</div>
          <div className="slide_item">슬라이드 4</div>
          <div className="slide_item">슬라이드 5</div>
          <div className="slide_prev_button slide_button">◀</div>
          <div className="slide_next_button slide_button">▶</div>
          <ul className="slide_pagination">
      </ul>
        </div>
        <nav>
          <div id="logo">
            <Link to="/">
              <p>SIM.</p>
            </Link>
          </div>
          <ul className="menu">
            <Link to="/TopShirts">
              <li className="top_li">
                <p className="top_p">top</p>
                <ul className="submenu">
                  <Link to="/TopShirts"><li className="Top_sub_li"><p>shirts</p></li></Link>
                  <Link to="/TopTShirts"><li className="Top_sub_li"><p>T-shirts</p></li></Link>
                  <Link to="/TopBlouse"><li className="Top_sub_li"><p>blouse</p></li></Link>
                </ul>
              </li>
            </Link>
            <Link to="/BottomPants">
              <li className="bottom_li">
                <p className="bottom_p">bottom</p>
                <ul className="submenu">
                  <Link to="/BottomPants"><li className="Bottom_sub_li"><p>pants</p></li></Link>
                  <Link to="/BottomSkirts"><li className="Bottom_sub_li"><p>skirts</p></li></Link>
                </ul>

              </li>
            </Link>
            <Link to="Onepiece">
              <li className="onepiece_li">
                <p className="onepiece_p">onepiece</p>
              </li>
            </Link>
            <Link to="Outer">
              <li className="outer_li">
                <p className="outer_p">outer</p>
              </li>
            </Link>
            <Link to="QandA">
              <li className="QandA_li">
                <p className="QandA_p">Q&A</p>
                <ul className="submenu">
                  <Link to="QandA"><li className="QandA_sub_li"><p>문의</p></li></Link>
                  <Link to="WritePage"><li className="QandA_sub_li"><p>글쓰기</p></li></Link>
                </ul>
              </li>
            </Link>
          </ul>
        </nav>
        <div id="section1" ref={articleRef}>
          <article className="article">
            <h1 className="letter">SIM.<br />Style is<br /> MY<br /> LIFE.</h1>
          </article>
        </div>

        <div id="DesignSentence1">
          <p>Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.</p>
        </div>

        <div id="section2">
          <div className="section2-inner">
            <div><p>collection</p></div>
            <div className="collection1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D')" }}></div>
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D')" }}></div>
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595770655797-73e75891d275?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D')" }}></div>
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523297467724-f6758d7124c5?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508964801641-4b2410705b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHwlRUQlOEMlQTglRUMlODUlOTh8ZW58MHx8MHx8fDA%3D')" }}></div>
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHwlRUQlOEMlQTglRUMlODUlOTh8ZW58MHx8MHx8fDA%3D')" }}></div>
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHwlRUQlOEMlQTglRUMlODUlOTh8ZW58MHx8MHx8fDA%3D')" }}></div>
          </div>
        </div>

        <div id="DesignSentence2">
          <p>Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.</p>
        </div>

        <p id="thenew">the new,</p>
        <div className="section3" ref={sliderRef}>
          <div className="section3-inner" ref={innerSliderRef}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="Newclothes"
                style={{ backgroundImage: `url('${images[index]}')`, }} key={index}
                ref={(el) => (targetRef.current[index] = el)} // 각 div에 ref 연결
              >
                </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <h1>SIM.</h1>
        <hr className="footerline" />
        <p className="footerP">Style<br />is<br />MY LIFE.</p>
        <hr className="footerline" />
        <span className="information">
          <p>Address: 대전광역시 유성구 1번지 11<br />number: 010-111-1111<br />사업자 등록번호: 100-11-1111</p>
        </span>
      </footer>
    </div>
  );
};

export default App;
