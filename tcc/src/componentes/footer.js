
import { FaFacebook, FaInstagram, FaWhatsapp,FaTwitter } from 'react-icons/fa'
import estilo from './Footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer className={estilo.footer}>
            <ul className={estilo.footer_ul}>
                <li><Link><FaFacebook /></Link></li>
                <li><Link><FaInstagram /></Link></li>
                <li><Link><FaTwitter /></Link></li>
                <li><Link><FaWhatsapp /></Link></li>
                
            </ul>
        </footer>
    )

}
export default Footer