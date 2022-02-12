import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCatalog from './components/GameCatalog';
import GameCreate from './components/GameCreate';


function App() {

    const routes = {
        '/home': WelcomeWorld,
        '/games': GameCatalog,
        '/create-game': GameCreate
    }


  return (
    <div id="box">

<Header />
<WelcomeWorld />

    <main id="main-content">
 
    </main>
 
</div>
    );
}
export default App;
