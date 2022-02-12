import { createElement, useState } from 'react';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCatalog from './components/GameCatalog';
import GameCreate from './components/GameCreate';


function App() {
const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />, //резулт. на комп.(<WelcomeWorld />), а не реф-a (WelcomeWorld)
        '/games': <GameCatalog />,
        '/create-game': <GameCreate />
    };

    const navigationChangeHandler = (path) => {
        setPage(path);
    }

      return (
    <div id="box">

<Header
navigationChangeHandler={navigationChangeHandler}
/>
<WelcomeWorld />

    <main id="main-content">
 {routes[page] || <h2> no page found!</h2>}
    </main>
 
</div>
    );
}
export default App;
