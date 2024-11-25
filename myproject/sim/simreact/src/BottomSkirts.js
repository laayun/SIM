import styles from './css/TopShirts.module.css';
import './css/BottomSkirts.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';


/*css 겹침현상 발생. TopShirts, TopTShirts, 아마 Main도 겹침. 해결해야함.*/
const BottomSkirts = () => {
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

  const targetRef = useRef([]);

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
          <p>bottom.</p>
          <ul className="navsmall">
            <li className="small-item"><Link to="/BottomPants"><p className= "small-item1">pants</p></Link></li>
            {/* styles.item1 요소를 확인하고 싶다면 TopShirts.module.css 파일로 */}
            <li className="small-item"><Link to="/BottomSkirts"><p className={styles.item2}>skirts</p></Link></li>
          </ul>
        </div>
        <hr />
        <div id="ClothesPage">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              ref={(el) => (targetRef.current[index] = el)}
              className={`clothes image-${index + 1}`} // 고유 클래스 사용
              style={{
                backgroundImage: `url('${images[index]}')`,
              }}
            >
              <div className={`overlay${index + 1}`}>
                <p className={styles.explain}>셔츠 <br />옷에 대한 설명과 소개글</p>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div id="undercontainer">
          <ul className="undernav">
            <li className="under-item"><Link to="#">←</Link></li>
            <li className="under-item"><Link to="#">1</Link></li>
            <li className="under-item"><Link to="#">2</Link></li>
            <li className="under-item"><Link to="#">3</Link></li>
            <li className="under-item"><Link to="#">→</Link></li>
          </ul>
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

export default BottomSkirts;
