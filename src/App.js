
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Animations from "./components/pages/Animations";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body>
              <Home />
            </Body>} 
          />

          <Route path="/animations" element={<Body>
              <Animations />
            </Body>}
          />

          <Route path="/sobre" element={<Body>
              <Sobre />
            </Body>} 
          />

        </Routes>       
      </Router>
    </div>
  )
}

export default App;
