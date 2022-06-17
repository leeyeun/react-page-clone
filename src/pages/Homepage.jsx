import { Route, Switch } from "react-router-dom";
import Blog from "../components/Blog";
import Community from "../components/Community";
import Docs from "../components/Docs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Tutorial from "../components/Tutorial";

export default function Hompage() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/docs" exact={true} component={Docs} />
        <Route path="/tutorial" exact={true} component={Tutorial} />
        <Route path="/blog" exact={true} component={Blog} />
        <Route path="/community" exact={true} component={Community} />
      </Switch>
      <Footer />
    </div>
  );
}
