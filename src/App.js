import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./container/Home";
import News from "./container/News";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
