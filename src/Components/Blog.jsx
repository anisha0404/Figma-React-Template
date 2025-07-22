import card1 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/card1.png';
import card2 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/card2.png';
import card3 from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/card3.png';
import spark from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/Vector (2).png';
import './Blog.css';

const Blog=()=>{
    return(
        <div className="blog-container">
            <div className="blog-inner">
                <div className="blog-header">
                    <h1 className="blog-heading"><img src={spark} alt="" />Blog</h1>
                    <a href="#" className="blog-link">view all</a>
                </div>
                <div className="blog-body">
                    {/* ********************************card1**************************************** */}
                    <div className="blog-card">
                        <div className="blog-left">
                            <img src={card1} alt="card1" />
                        </div>
                        <div className="blog-right">
                            <div className="inner-left">
                                <h3 className='date-heading'>Nov 9, 2023</h3>
                                <h1 className='title-heading'>How UX works in web</h1>
                                <div className="blog-buttons">
                                    <button className="blog-button">UI</button>
                                    <button className="blog-button">UX</button>
                                </div>
                            </div>
                            <div className="inner-right">
                                <button className="read">Read</button>
                            </div>
                        </div>
                    </div>
                    {/* *****************************card2************************************** */}
                    <div className="blog-card">
                        <div className="blog-left">
                            <img src={card2} alt="card2" />
                        </div>
                        <div className="blog-right">
                            <div className="inner-left">
                                <h3 className='date-heading'>Aug 18, 2023</h3>
                                <h1 className='title-heading'>Case study - Analysis Application.</h1>
                                <div className="blog-buttons">
                                    <button className="blog-button">DESIGN</button>
                                    <button className="blog-button">PRINT</button>
                                </div>
                            </div>
                            <div className="inner-right">
                                <button className="read">Read</button>
                            </div>
                        </div>                       
                    </div>
                    {/* ******************************card3**************************************** */}
                    <div className="blog-card">
                        <div className="blog-left">
                            <img src={card3} alt="card3" />
                        </div>
                        <div className="blog-right">
                            <div className="inner-left">
                                <h3 className='date-heading'>Nov 9, 2023</h3>
                                <h1 className='title-heading'>How UX works in web</h1>
                                <div className="blog-buttons">
                                    <button className="blog-button">FIGM</button>
                                    <button className="blog-button">WEB</button>
                                </div>
                            </div>
                            <div className="inner-right">
                                <button className="read">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;