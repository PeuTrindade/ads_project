import './App.css';
import { AdsContainer } from './components/adsContainer/AdsContainer';
import { FindAds } from './components/findAds/FindAds';
import { Header } from './components/header/Header';


export function App() {
    return (
        <>
            <Header />
            <FindAds />
            <AdsContainer />
        </>
    );
}