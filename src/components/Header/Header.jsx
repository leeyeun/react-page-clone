import React from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.svg";
import Blog from "../Blog";
import Community from "../Community";
import Docs from "../Docs";
import Main from "../Main/Main";
import Tutorial from "../Tutorial";
export default function Header() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    width: 100%;
  `;
  const StyledHeader = styled.header`
    background-color: #272c34;
  `;
  const NavBar = styled.div`
    width: 1260px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    box-sizing: border-box;
  `;

  const Divbox = styled.div`
    display: flex;
  `;

  // const
  return (
    <StyledHeader>
      <NavBar>
        <Divbox>
          <a href="/">
            <img src={logo} alt="" style={{ height: "20px" }} />
            <span className="logo">React</span>
          </a>
          <StyledLink to="/docs">Docs</StyledLink>
          <StyledLink to="/tutorial">Tutorial</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
          <StyledLink to="/community">Community</StyledLink>
          <Switch>
            <Route path="/docs" exact={true} component={Docs} />
            <Route path="/tutorial" exact={true} component={Tutorial} />
            <Route path="/blog" exact={true} component={Blog} />
            <Route path="/community" exact={true} component={Community} />
          </Switch>
        </Divbox>
      </NavBar>
    </StyledHeader>
  );
}
