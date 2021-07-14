
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
