import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import Careshare from "./pages/Careshare";
import Ecommerce from "./pages/Ecommerce";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/project1" component={ProjectOne} />
          <Route path="/project2" component={ProjectTwo} />
          <Route path="/careshare" component={Careshare} />
          <Route path="/ecommerce" component={Ecommerce} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
