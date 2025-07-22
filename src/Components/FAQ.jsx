import React from 'react';
import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';// Replace with your correct path
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container" id="faq">
      <h1 className="faq-heading">
        <img src={spark} alt="spark" />
        Frequently asked questions
      </h1>

      <div className="faq-question">
        <h2>What is your design process?</h2>
        <p>
          My design process typically involves four key phases: research, design, prototype, and test. In the research
          phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual
          designs that meet those needs. In the prototype phase, I create interactive models of the design for testing.
          In the test phase, I collect feedback from users to refine the design.
        </p>
      </div>

      <div className="faq-question">
        <h2>What tools and software do you use for UX design?</h2>
      </div>

      <div className="faq-question">
        <h2>How do you measure the success of your UX designs?</h2>
      </div>
    </div>
  );
};

export default FAQ;
