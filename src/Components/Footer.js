import React from 'react'
import './Footer.css'
import {FaFacebook, 
        FaInstagram, 
        FaLinkedin, 
        FaMailBulk, 
        FaPhone, 
        FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='inside-container'> 
                <div className='left-side'>
                    <div className='phone'>
                        <h4>
                        <FaPhone size={20}  
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        +91 948 721 8667
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk size={20} 
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        ajmal001aj@gmail.com
                        </h4>
                    </div>
                </div>

                <div className='right-side'>
                    <div className='social'>
                        <FaLinkedin size={30} 
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        <FaTwitter size={30} 
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        <FaFacebook size={30} 
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                        <FaInstagram size={30} 
                        style ={{color:'#fff',marginRight:'1.5rem'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer