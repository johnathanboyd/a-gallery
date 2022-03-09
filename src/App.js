import './App.css';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Redirect,
  Switch 
} from "react-router-dom";
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import AboutPage from './components/About/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Surprise shawty!
          </p> */}
          <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />}/>
            </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
