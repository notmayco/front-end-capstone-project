import footerLogo from '../assets/footerLogo 1.png'
import { navItems } from './Nav'
function Footer() {
    return(
        <footer>
            <img src={footerLogo} alt='footer logo'/>
            <div>
                <h1>Doormat Navigation</h1>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.to}>{item.title}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Contacts</h1>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h1>Social Media Links</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer