import './assets/css/app.css';
import Header from './common/Header';
import PlayMusic from './common/PlayMusic';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-wrapper">
          <Home />
      </div>
      <PlayMusic />
    </div>
  );
}

export default App;
