import React from 'react'
import './App.css'
import Navbar from './navbar'
function Mainpage() {
    return (
        <div className='mainpage'>
            <div className='stpage'>
            <div>
                <div className='text-align'>
                <p className="text">Beautiful React</p>
               <div className='text-align2'> <p className='text' style={{paddingRight:"9px"}}>Templates</p>
               <p className='text2'>for you.</p></div>
               <p className='text3'>Our templates are easy to setup, understand and customize.<br/> Fully modular components with a variety of pages and<br/> components.</p>
                <div className='form'><input className='input' placeholder="Your E-mail Address" type="text" /><button className='get-btn'>Get started</button></div>
                <p className='trust'>OUR TRUSTED CUSTOMERS</p>
                <img className='image2' src="https://treact.owaiskhan.me/static/media/customers-logo-strip.680ac7c2.png" alt="" srcset="" />
                </div>
                
            </div>
            <div>
                <img className='image' src="https://treact.owaiskhan.me/static/media/design-illustration-2.6da6a00b.svg" alt="" srcset="" />
            </div>
            </div>
        </div>
    )
}

export default Mainpage
