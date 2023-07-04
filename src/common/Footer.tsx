import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="container flex mx-auto justify-around">
            <div>
                <p>Made with love by me!</p>
            </div>
            <div className="flex gap-4">
                <Link to="https://github.com/redcowe"><GitHubIcon /></Link>
                <a href="mailto:josh@jcowe.jp"><EmailIcon /></a>
                <Link to="https://www.linkedin.com/in/joshuacowell/"><LinkedInIcon /></Link>

            </div>
        </div>
    )
}

export default Footer;
