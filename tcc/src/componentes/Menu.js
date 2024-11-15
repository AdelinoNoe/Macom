import { Link } from "react-router-dom"
import style from './Menu.module.css'
function Menu() {

    return (

        
        <nav className={style.menu}>
            <div className={style.opacidade}>
            <div></div>
            <ul className={style.menu_ul}>
                    <li className={style.menu_li}><Link to="/">Página Inicial</Link></li>
                    <li className={style.menu_li}><Link to="/Viagem">Viagens Disponíveis</Link></li>
                    <li className={style.menu_li}><Link to="/Agencia">Agencias</Link></li>
                    <li className={style.menu_li}><Link to="/Mercadoria">Envio de Mercadoria</Link></li>
                    <li className={style.menu_li}><Link to="/Recuerar">Minhas Viagens</Link></li>
            </ul>
            </div>
        </nav>
       
    )

}
export default Menu