import React from 'react';
import './css/WritePage.css';
import { Link, useNavigate } from 'react-router-dom';

const WritePage = () => {
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 제출 방지
    alert('작성 완료!'); // 알림 표시
    // QandA.js로 이동
    navigate('/QandA'); // 경로에 맞게 수정하세요
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
          <p>Writing.</p>
        </div>
        <div id="Writingsection">
          <form onSubmit={handleSubmit}>
            {/* 글 카테고리 고르기 */}
            <select name="category">
              <option value="none">글 유형</option>
              <option value="Question">질문하기</option>
              <option value="inquire">문의하기</option>
            </select>
            {/* 게시판 영역 */}
            <table className ="Writetable">
              <tr>
                <td className="Writeheader">Title.</td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="제목을 입력하세요" name="title" required />
                </td>
              </tr>
              <tr>
                <td className="Writeheader">Comment.</td>
              </tr>
              <tr>
                <td>
                  <textarea placeholder="내용을 입력하세요" name="detail" required></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="등록" />
                </td>
              </tr>
            </table>
          </form>
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

export default WritePage;
