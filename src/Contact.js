import React, { useState } from 'react'
import './Contact.css'
import Resume from './files/Sivanth_Pachipala_Resume.pdf'
import { db } from './firebaseConfig'
import { addDoc, collection } from "firebase/firestore"; 

function Contact() {
    const [thanks, setThanks] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const userCollectionRef = collection(db, "contact_data")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name && email && message){
            setThanks(true)
        }
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            message: message
        })
        setTimeout(() => {
            setThanks(false);
            setName('');
            setEmail('');
            setMessage('');
        }, 5000);
    }
  return (
    <div id='contact'>
        <div className='container'>
            <div className='row contact-info'>
                <div className='contact-left'>
                    <h1 className='heading'>Contact Me</h1>
                    <p><a href='mailto:sivanth24@gmail.com' target='_blank' rel='noreferrer'><i className="fa-solid fa-paper-plane"></i></a>sivanth24@gmail.com</p>
                    <p><a href='tel:+393200938021' target='_blank' rel='noreferrer'><i className="fa-solid fa-phone"></i></a>+39 3200938021</p>
                    {/* <div className='social-icons'>
                        <a href='https://www.linkedin.com/in/sivanth-pachipala-516391b7/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://www.facebook.com/p.sivanth/' target='_blank' rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a>
                        <a href='https://twitter.com/sivanth_p' target='_blank' rel='noreferrer'><i className="fa-brands fa-square-twitter"></i></a>
                        <a href='https://www.instagram.com/sivanth_p/' target='_blank' rel='noreferrer'><i className="fa-brands fa-square-instagram"></i></a>
                    </div> */}
                    <a className='btn btn2' href={Resume} download="Sivanth_Pachipala_Resume">Download Resume</a>
                </div>
                <div className='contact-right'>
                    <form>
                        <input type='text' name='Name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name' required/>
                        <input type='email'  name='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email ' required/>
                        <textarea name='Message'  value={message} onChange={(e)=>{setMessage(e.target.value)}} rows='6' placeholder='Your Message' required></textarea>
                        <button className='btn btn2' onClick={(e)=>{handleSubmit(e)}} >Submit</button>
                    </form>
                </div>
            </div>
           {thanks && <p className='thanks-note'>" Thanks for submitting! <i className="fa-solid fa-thumbs-up"></i> "</p>}
        </div>
    </div>
  )
}

export default Contact