import React from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.svg";
import Blog from "../Blog";
import Community from "../Community";
import Docs from "../Docs";
import Main from "../Main/Main";
import Tutorial from "../Tutorial";
import "./header.css";

export default function Header() {
  const StyledHeader = styled.header`
    background-color: #272c34;
  `;
  const NavBar = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    box-sizing: border-box;
  `;

  const Divbox = styled.div`
    display: flex;
    align-items: center;
  `;

  const LogoLink = styled.a`
    /* display: flex; */
    margin-right: 10px;
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    :hover {
    }
  `;
  // const
  return (
    <StyledHeader>
      <NavBar>
        <Divbox>
          <LogoLink href="/">
            <img src={logo} alt="" style={{ height: "20px" }} />
            <span className="logo">React</span>
          </LogoLink>
          <nav>
            <StyledLink to="/docs">Docs</StyledLink>
            <StyledLink to="/tutorial">Tutorial</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/community">Community</StyledLink>
          </nav>
          <form>
            <input type="search" style={{}} />
          </form>
          <StyledLink to="/community"></StyledLink>
          <StyledLink to="/community">v18.2.0</StyledLink>
          <StyledLink to="/community">Languages</StyledLink>
          <StyledLink to="/community">Github</StyledLink>
        </Divbox>
      </NavBar>
    </StyledHeader>
  );
}
