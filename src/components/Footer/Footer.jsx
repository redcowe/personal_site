import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import "./Footer.css";

export default function Footer() {
    const linkedIn = 'https://www.linkedin.com/in/joshuacowell/';
    const github = 'https://github.com/redcowe';
    const email = 'mailto:joshuacowell@hotmail.com';
    return (
        <div className="footer">
            <footer>
                <ul className="footer-list">
                    <li className="footer-list-item"><a href={linkedIn} target="_blank" rel="noreferrer"><LinkedInIcon /></a></li>
                    <li className="footer-list-item"> <a href={github} target="_blank" rel="noreferrer"><GitHubIcon /></a></li>
                    <li className="footer-list-item"><a href={email}><MailIcon /></a></li>
                </ul>
            </footer>    
        </div>
    )
}