import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Careshare from "./pages/Project/Careshare";
import Ecommerce from "./pages/Project/Ecommerce";
import AwsImageUpload from "./pages/Project/AwsImageUpload";
import PpmTool from "./pages/PpmTool";
import GithubUsers from "./pages/Project/GithubUsers";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/ppmtool" component={PpmTool} />
          <Route path="/github_users" component={GithubUsers} />
          <Route path="/careshare" component={Careshare} />
          <Route path="/ecommerce" component={Ecommerce} />
          <Route path="/awsimageupload" component={AwsImageUpload} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
