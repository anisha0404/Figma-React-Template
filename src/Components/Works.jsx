import card1 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/card1.png';
import card2 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/card2.png';
import card3 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/card3.png';
import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';

import './Works.css';


const Works=()=>{
    return(
        <div className="works-container">
            <div className="works-box">
                <h1 className='Heading'><img src={spark} alt="" />Works</h1>
                <div className="container">
                    <div className="work-box">
                        <div className="image-b0x">
                            <img src={card1} alt="" />
                        </div>
                        <div className="right">
                            <div className="work-heading">
                                <h2 className="work-heading1">Analysis Application</h2>
                            </div>
                            <div className="work-para">
                                <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
                            </div>
                            <div className="work-buttons">
                                <button>Figma</button>
                                <button>UX</button>
                            </div>
                            <button className="work-case-button">View Case Study</button> 
                        </div>
                                               
                    </div>
                    {/* ************************************************************************ */}
                    <div className="work-box">
                        <div className="image-b0x">
                            <img src={card2} alt="" />
                        </div>
                        <div className="right">
                            <div className="work-heading">
                            <h2 className="work-heading2">Fortknox Application</h2>
                            </div>
                            <div className="work-para">
                                <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
                            </div>
                            <div className="work-buttons">
                                <button>Mobile</button>
                                <button>WEB</button>
                            </div>
                            <button className="work-case-button">View Case Study</button>
                        </div>
                        
                    </div>
                    {/* ******************************************************************** */}
                    
                    <div className="work-box">
                        <div className="image-b0x">
                            <img src={card3} alt="" />
                        </div>                    
                            
                        <div className="right">
                            <div className="work-heading">
                                <h2 className="work-heading3">Zenocide Application</h2>
                            </div> 
                            <div className="work-para">
                                <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
                            </div>
                            <div className="work-buttons">
                                <button>APP</button>
                                <button>WEB</button>   
                            </div>
                            <button className="work-case-button">View Case Study</button> 
                        </div>
                                                   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Works;