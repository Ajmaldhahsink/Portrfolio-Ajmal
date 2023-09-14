import './Form.css'
import React , {useEffect} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

const Form = () => {

  useEffect(() => {
    Aos.init({duration:1000});
  },[]);

  return (
    <div data-aos='fade-up' className='form'>
      <form>
        <label>Your Name</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Subject</label>
        <input type='text' />
        <label>Message</label>
        <textarea rows='6' placeholder='Type Your Message here . . . '>
        </textarea>
        <button className='btn'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Form
