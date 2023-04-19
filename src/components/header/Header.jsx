import styles from './Header.module.css';
import igreja from '../../assets/igreja.jpg';
import { AiOutlineWhatsApp } from 'react-icons/ai';


export function Header () {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.navbarContainer}>
                <div className={styles.mainContent}>
                    <img src={igreja} alt="imagem da igreja" />
                    <div className={styles.textContainer}>
                        <h3>IASD CENTRAL FSA</h3>
                        <p>Departamento de Comunicação</p>
                    </div>
                </div>
                <a href="#"><AiOutlineWhatsApp className={styles.icon} /> Entre na comunidade</a>
            </nav>
        </header>
    );
}