import { useTranslation } from 'react-i18next';

import logo from './logo.svg';
import './App.css';

const App = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => i18n.changeLanguage(e.target.value);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="select">
                    <select value={i18n.language} onBlur={(e) => e} onChange={handleChangeLanguage}>
                        <option value="en">English</option>
                        <option value="vi">Vietname</option>
                    </select>
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{t('welcome')}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
