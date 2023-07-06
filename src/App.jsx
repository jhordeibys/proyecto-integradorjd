import './App.css';
import Nav from "./components/Nav/nav.jsx"
import Cards from './components/cards/Cards.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters}/>
      </div>
   );
}

export default App;
