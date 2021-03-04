import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';

import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';

const App = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => i18n.changeLanguage(e.target.value);

    return (
        <Provider store={store()}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="select">
                        <select
                            value={i18n.language}
                            onBlur={(e) => e}
                            onChange={handleChangeLanguage}>
                            <option value="en">English</option>
                            <option value="vi">Vietname</option>
                        </select>
                    </div>
                    <Post />
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
        </Provider>
    );
};

export default App;
