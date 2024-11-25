import React from 'react';
import './Main.css';
import Main from './SimMain';
import TopShirts from './TopShirts';
import TopTShirts from './TopTShirts';
import TopBlouse from './TopBlouse';
import BottomPants from './BottomPants';
import BottomSkirts from './BottomSkirts';
import Onepiece from './Onepiece';
import Outer from './Outer';
import QandA from './QandA';
import Write from './Write'



const App = () => {
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
          <ul className="slide_pagination"></ul>
        </div>
        
        <nav>
          <div id="logo">
            <Link to = "/Main">
              <p>SIM.</p>
            </Link>
          </div>
          <ul className="menu">
            <Link to = "/TopShirts">
            <li>
              <p>top</p>
            <ul className="submenu">
              <Link to = "/TopShirts"><li>shirts</li></Link>
              <Link to = "/TopTShirts"><li>T-shirts</li></Link>
              <Link to = "/TopBlouse"><li>blouse</li></Link>
            </ul>
            </li>
            </Link>
            <Link to = "/BottomPants">
            <li>
              <a href="C:\Users\wldbs\myproject\sim\simhtml\bottom-pants.html">bottom</a>
              <ul className="submenu">
                <Link to = "/BottomPants"><li>pants</li></Link>
                <Link to = "/BottomSkirts"><li>skirts</li></Link>
              </ul>
            </li>
            </Link>
            <Link to ="Onepiece">
            <li className="onepiece">
              onepiece
            </li>
            </Link>
            <Link to = "Outer">
            <li>
              outer
            </li>
            </Link>
            <Link to = "QandA">
            <li>
              <Link to = "QandA">Q&A</Link>
              <ul className="submenu">
                <Link to = "QandA"><li>문의</li></Link>
               <Link to = "Write"><li>글쓰기</li></Link>
              </ul>
            </li>
            </Link>
          </ul>
        </nav>

        <div id="section1">
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
            <div className="collection2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D')" }}></div>
            {/* 반복되는 div를 배열로 처리할 수 있어 */}
          </div>
        </div>

        <div id="DesignSentence2">
          <p>Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.&nbsp;Style is MY LIFE.</p>
        </div>

        <p id="thenew">the new,</p>
        <div className="section3">
          <div className="section3-inner">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="newclothes" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D')" }} key={index}>
                <div className="overlay1">
                  <p className="explain">신상품 <br />옷에대한 설명과 소개글</p>
                </div>
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
