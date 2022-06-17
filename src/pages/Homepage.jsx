import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "../components/Blog";
import Community from "../components/Community";
import Docs from "../components/Docs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Tutorial from "../components/Tutorial";

export default function Hompage() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
