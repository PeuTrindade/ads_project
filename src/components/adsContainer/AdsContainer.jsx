import { Ad } from '../ad/Ad';
import styles from './AdsContainer.module.css';


export function AdsContainer () {
    return (
        <section className={styles.adsContainer}>
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
        </section>
    );
}