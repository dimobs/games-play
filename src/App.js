import { useState } from 'react';
import {Route} from 'react-router-dom'
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCreate from './components/GameCreate';
import GameCatalog from './components/GameCatalog/GameCatalog';
import GameDetails from './components/GameDetails';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/404';

function App() {
    const [page, setPage] = useState('/home');

    const navigationChangeHandler = (path) => {
              setPage(path);
    }

    const router = (path) => {
        let pathNames = path.split('/');

        let rootPath = pathNames[1];
        let argument = pathNames[2];

        const routes = {
            'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />, //резулт. на комп.(<WelcomeWorld />), а не реф-a (WelcomeWorld)
            'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
            'create-game': <GameCreate />,
            'login': <Login />,
            'register': <Register />,
            'details': <GameDetails id={argument} /> 
        };
return routes[rootPath]
    }

    return (
        <div id="box">
            <Header
                navigationChangeHandler={navigationChangeHandler}
            />
            <main id="main-content">
           
            </main>

        </div>
    );
}
export default App;
