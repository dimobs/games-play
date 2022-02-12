import { useState } from 'react';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCreate from './components/GameCreate';
import GameCatalog from './components/GameCatalog/GameCatalog';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/404';
//import Logout from './components/Logout';



function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />, //резулт. на комп.(<WelcomeWorld />), а не реф-a (WelcomeWorld)
        '/games': <GameCatalog />,
        '/create-game': <GameCreate />,
        '/login': <Login />,
        '/register': <Register />,

       // '/logout': <Logout />,
    };

    const navigationChangeHandler = (path) => {
        setPage(path);
    }

    return (
        <div id="box">
            <Header
                navigationChangeHandler={navigationChangeHandler}
            />
            <main id="main-content">
                {routes[page] || <ErrorPage />}
            </main>

        </div>
    );
}
export default App;
