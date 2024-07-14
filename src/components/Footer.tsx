import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
    return (
       <div className='container'>
       <footer>
        <a href=""><img src="/images/p2.png" alt="" /></a>
        <p>AgriGrow was made based on the issues faced in many countries.It is focused on being easily accessible and easy to use for all.This bridges the gap between farmer and supplier and it also helps the farmer to track their planting progress </p>
        <div className="contents">
        <a href="https://www.instagram.com/"><img src="/images/insta.png" alt="" /></a>
        <a href="https://twitter.com/"><img src="/images/twitter.png" alt="" /></a>
        <a href="https://youtube.com/"><img src="/images/youtube.png" alt="" /></a>
        <a href="https://web.whatsapp.com/"><img src="/images/whatsapp.png" alt="" /></a>
        </div>
        <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/'}>Contact Us</Link></li>
        <li ><Link to={'/register'}>Sign Up</Link></li>
        <li ><Link to={'/login'}>Log In</Link></li>
            </ul>
    </footer>
    </div>

    )
}