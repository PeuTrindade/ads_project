import styles from './FindAds.module.css';


export function FindAds () {
    return (
        <form className={styles.formContainer} action="">
            <input placeholder="Palavra-Chave" type="text" />
            <button>Buscar</button>
        </form>
    );
}