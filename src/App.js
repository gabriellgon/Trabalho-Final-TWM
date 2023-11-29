import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/utils/Menu.jsx';

function App() {
  return (
    <div className="App">
      <h2>Loja de calçados</h2>
      <Router>
        <Menu />
      </Router>
    </div>
  );
}

export default App;