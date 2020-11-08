import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__top">
                <li><a href="https://www.facebook.com/chris.sison.587" target="_blank" rel="noreferrer"><FacebookIcon className="footer__icon" /></a></li>
                <li><a href="https://www.instagram.com/5ison/?hl=en" target="_blank" rel="noreferrer"><InstagramIcon className="footer__icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/chris-alexander-86b8a5194" target="_blank" rel="noreferrer"><LinkedInIcon className="footer__icon" /></a></li>
            </ul>

            <div className="footer__middle">
                <div className="middle__top">
                    <p>Audio and Subtitles</p>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Gift Cards</p>
                    <p>Thank you for visiting!</p>
                </div>
                    
                <div className="middle__middle">
                    <p>Audio Description</p>
                    <p>Investors Relations</p>
                    <p>Legal Notices</p>
                    <p>Terms of Use</p>
                </div>
                    
                <div className="middle__bottom">
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie References</p>
                    <p>Corporate Information</p>
                </div>
            </div>
            {/* footer bottom */}
            {/* footer copyright */}
        </div>
    )
}

export default Footer
