import './Contact.css';
import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';
const LetsTalk = () => {
  return (
    <div className="lets-talk-container">
      <div className="marquee-text">
        <span><img src={spark} alt="" /> FLOW <img src={spark} alt="" /> FIGMA <img src={spark} alt="" /> DESIGNER <img src={spark} alt="" /> DEVELOPER <img src={spark} alt="" /></span>
        <span><img src={spark} alt="" /> FLOW <img src={spark} alt="" /> FIGMA <img src={spark} alt="" /> DESIGNER <img src={spark} alt="" /> DEVELOPER <img src={spark} alt="" /></span>

      </div>

      <div className="talk-box">
        <h1 className="talk-heading">LET’S TALK!</h1>
        <a
          href="mailto:rehanurraihan@gmail.com"
          className="talk-email"
          target="_blank"
          rel="noopener noreferrer"
        >
          rehanurraihan@gmail.com 
        </a>
      </div>

      <div className="talk-footer">
        <div className="credit">© Rehan Raihan - 2023</div>
        <div className="socials">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
