import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';
import wave from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (3).png';
import wave2 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (4).png';
import third from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Frame.png';
import rectangle from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Rectangle.png';
import textt from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/textt.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="inner-container">
        <div className="text">
          <p>
            I AM 
            <img src={rectangle} alt="A" />
            FREELANCE
          </p>
          <p>
            DESIGNER
            <img src={textt} className="textt" alt="FROM" />
            FROM
          </p>
          <p>SAN FRANCISCO</p>
        </div>

        <div className="bottom-box">
          <ul className="left-list">
            <li><img src={spark} alt="" /> doradesign</li>
            <li><img src={wave} alt="" /><img src={wave2} alt="" /></li>
            <li><img src={third} alt="" /></li>
          </ul>
          <div className="right-home">
            <p>
              Welcome to my portfolio. Here, artistry meets functionality.
              Dive into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
