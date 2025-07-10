import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
       <h1>Collingswood Area Queer Connection</h1>
       <div>
        <p>Promoting South Jersey LGBTQIA+ artists.</p>
       </div>
      </header>
    </div>
  );
}

export default App;
