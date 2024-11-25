import React from 'react';
import './css/QandA.css';
import { Link, useNavigate } from 'react-router-dom';



const QandA = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/WritePage'); // 경로를 적절하게 수정하세요
  };

  return (
    <div id="wrap">
      <main>
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
            <Link to="/Onepiece">
              <li className="onepiece_li">
                <p className="onepiece_p">onepiece</p>
              </li>
            </Link>
            <Link to="/Outer">
              <li className="outer_li">
                <p className="outer_p">outer</p>
              </li>
            </Link>
            <Link to="/QandA">
              <li className="QandA_li">
                <p className="QandA_p">Q&A</p>
                <ul className="submenu">
                  <Link to="/QandA"><li className="QandA_sub_li"><p>문의</p></li></Link>
                  <Link to="/WritePage"><li className="QandA_sub_li"><p>글쓰기</p></li></Link>
                </ul>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="topnav">
          <p>Q&A.</p>
        </div>
        <div id="Questionsection">
          <div id="Question">
            <p>Question</p>
            <table className="table">
              <thead>
                <tr className="header">
                  <td className="num">번호</td>
                  <td className="title">제목</td>
                  <td>작성자</td>
                  <td>작성날짜</td>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }, (_, i) => (
                  <tr className="body" key={i}>
                    <td>{i + 1}</td>
                    <td className="title">대충 질문써져있는 글</td>
                    <td>작성자</td>
                    <td>24-08-{31 - i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <table>
              <tr>
                <td>
                  <button onClick={handleButtonClick}>
                    글쓰기
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div id="Eventsection">
            <p>Inquire</p>
            <table className="table">
              <thead>
                <tr className="header">
                  <td className="num">번호</td>
                  <td className="title">제목</td>
                  <td>작성자</td>
                  <td>작성날짜</td>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }, (_, i) => (
                  <tr className="body" key={i}>
                    <td>{i + 1}</td>
                    <td className="title">문의하는 글</td>
                    <td>작성자</td>
                    <td>24-08-{30 - i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <table>
              <tr>
                <td>
                  <button onClick={handleButtonClick}>
                    글쓰기
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div id="container">
          <div id="Questioncontainer">
            <ul className="undernav">
              <li className="under-item"><a href="#">←</a></li>
              <li className="under-item"><a href="#">1</a></li>
              <li className="under-item"><a href="#">2</a></li>
              <li className="under-item"><a href="#">3</a></li>
              <li className="under-item"><a href="#">→</a></li>
            </ul>
          </div>
          <div id="Eventcontainer">
            <ul className="undernav">
              <li className="under-item"><a href="#">←</a></li>
              <li className="under-item"><a href="#">1</a></li>
              <li className="under-item"><a href="#">2</a></li>
              <li className="under-item"><a href="#">3</a></li>
              <li className="under-item"><a href="#">→</a></li>
            </ul>
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

export default QandA;
