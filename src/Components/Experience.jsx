import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';

import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-heading"><img src={spark} alt="" /> Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <div className="role">Lead Product Designer</div>
          <div className="company">
            <span>Fortknox</span>
            <p>Mar 2022 – Oct 2023</p>
          </div>
        </div>
        <hr />

        <div className="experience-item">
          <div className="role">Intern Designer</div>
          <div className="company">
            <span>OmniSafe</span>
            <p>Mar 2022 – Oct 2023</p>
          </div>
        </div>
        <hr />

        <div className="experience-item">
          <div className="role">UI Designer</div>
          <div className="company">
            <span>Doradesign</span>
            <p>Mar 2022 – Oct 2023</p>
          </div>
        </div>
        <hr />

        <div className="experience-item">
          <div className="role">Frontend Developer</div>
          <div className="company">
            <span>OpacityAuthor</span>
            <p>Mar 2022 – Oct 2023</p>
          </div>
        </div>
         <hr />
      </div>
    </div>
  );
};

export default Experience;
