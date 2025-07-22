import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';
import boy from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/boy.png';
import left from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Frame (2).png';
import right from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Frame (1).png';
import quote from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/quote.png';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className="testimonial-container" id="testimonial">
            <h1 className="testi-heading"><img src={spark} alt="" />What they say</h1>
            <div className="testimonial-inner-container">
            <div className="testi-left">
                <div className="boy">
                    <img src={boy} alt="" />
                    <div className="boy-right">
                        <h1>Floud Miles</h1>
                        <p>eBay</p>
                    </div>
                </div>
            </div>
            <div className="testi-right">
                <div className="quote">
                    <img src={quote} alt="quote" />
                </div>
                <div className="testi-para">
                    Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
                </div>
                <div className="arrows">
                    <div className="left-arrow"><img src={left} alt="" /></div>
                    <div className="right-arrow"><img src={right} alt="" /></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Testimonial;