//imported styles
import './CSS/App.css';
import './CSS/navbar.css'
import './CSS/TBCxUSAID.css'

//imported components
import Navbar from './components/Navbar';
import TbcXUsaidPage from './components/TbcXUsaidPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TbcXUsaidPage/>
    </div>
  );
}

export default App;
