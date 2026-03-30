import BGShader from '../components/backgroundShader2.jsx';
import Footer from '../components/Footer.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
import './Contact.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact({dark}){
    const [state, handleSubmit] = useForm("xqeygzbr");
    return(
        <> 
        <BGShader dark={dark} />
        <main className="frameC" >

            <div className="ContainerContact">
                <div className="TitleContact">
                    <h1 className='TextContact'>Contact Me</h1>
                </div>
            </div>
            <div className="window" style={{paddingTop: '20px', margin: 0}}>
                <div className="item" style={{flexDirection:"column"}}>

                    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input
                            id="name"
                            type="name" 
                            name="name"
                            className='formInput'
                            required
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            className='formInput'
                            required
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="email">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className='formInput'
                            required
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Send
                        </button>
                    </form>

                    <div className="RowDiv">
                        <a className='icons' target="_blank" href="https://github.com/sortascary">
                            <i className="bi bi-github" style={{ fontSize:"2em", color:"black"}}></i>
                        </a>
                        <a className='icons' target="_blank" href="https://x.com/sortascary">
                            <i className="bi bi-twitter" style={{ fontSize:"2em", color:"black"}}></i>
                        </a>
                        <a className='icons' target="_blank" href="https://www.linkedin.com/in/dzaky-ihsan-rasyid-531b65284/">
                            <i className="bi bi-linkedin" style={{ fontSize:"2em", color:"black"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <div style={{ backgroundColor: "var(--bg)", zIndex: "1", position: "relative" }} >
            <Footer />
        </div>  
            
        </>
    );
}
export default Contact;