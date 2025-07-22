import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';
import './Expertise.css';
const Expertise=()=>{
    return(
        <div className="expertise-container" id="expertise">
            <div className="expertise-inner-container">
                <h1 className='Heading'><img src={spark} alt=""/>Expertise</h1>
                <div className="grid-container">
                    <div className="box">
                        <h2>▪ Branding</h2>
                        <p>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>            
                    </div>
                    <div className="box">
                        <h2>▪ UX Design</h2>
                        <p>I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements</p>
                                        
                    </div>
                    <div className="box">
                        <h2>▪ UI Design</h2>
                        <p>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>            
                    </div>
                    <div className="box">
                        <h2>▪ Development</h2>
                        <p>I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.</p>            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Expertise;