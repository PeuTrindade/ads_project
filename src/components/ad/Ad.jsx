import styles from './Ad.module.css';
import { BiTime } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';


export function Ad () {
    return (
        <div className={styles.adContainer}>
            <img src="https://i.pinimg.com/originals/bd/44/3d/bd443df1f5499a342b14f295e2454f72.jpg" alt="imagem do anúncio"/>
            <div className={styles.iconsContainer}>
                <span><MdDateRange /> 20/04/2023</span>
                <span><BiTime /> 15h00</span>
            </div>
            <div className={styles.textContainer}>
                <h3>Título do anúncio</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... <span>Ler mais</span></p>
                <a href="#">Visitar link</a>
            </div>
        </div>
    );
}