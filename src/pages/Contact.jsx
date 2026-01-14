import BGShader from '../components/backgroundShader2.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";

import './Contact.css'

function Contact({dark}){
    return(
        <> 
        <BGShader dark={dark} />
        <main className="frameC" >

            <div className="ContainerContact">
                <div className="TitleContact">
                    <h1 className='TextContact'>Contact Me</h1>
                </div>
            </div>
            <div className="window" style={{paddingTop: '20px'}}>
                <div className="item" style={{flexDirection:"column"}}>
                    <form action="submit" style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor="name">Name:</label>
                        <input type="name" className='formInput' />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className='formInput' />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" className='formInput' ></textarea>
                        <button disabled type="button">send</button>
                    </form>
                    <div className="RowDiv">
                        <a className='icons' target="_blank" href="https://github.com/sortascary">
                            <i class="bi bi-github" style={{ fontSize:"2em", color:"black"}}></i>
                        </a>
                        <a className='icons' target="_blank" href="https://x.com/sortascary">
                            <i class="bi bi-twitter" style={{ fontSize:"2em", color:"black"}}></i>
                        </a>
                        <a className='icons' target="_blank" href="https://www.linkedin.com/in/dzaky-ihsan-rasyid-531b65284/">
                            <i class="bi bi-linkedin" style={{ fontSize:"2em", color:"black"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
            
        </>
    );
}
export default Contact;