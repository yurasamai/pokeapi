import React, { Component } from 'react';
import styled from 'styled-components';
import log from './logo.svg';
import SearchPokemon from './SearchPokemon.js';
import { Link } from 'react-router-dom';
import '../App.css';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

export default class NavBar extends Component {
  state = {
    hoverNavBar: false
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    // Added True To End To Listen to All Events On Page
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    // Added True To End To LIsten to All Events On Page
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        style={
          this.state.hoverNavBar
            ? {
                boxShadow:
                  '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                backgroundColor: '#ef5350 !important'
              }
            : { backgroundColor: 'transparent !important' }
        }
      >
        <div class="row ">
        <div className="center-v col-12 col-md-6 col-sm-3 center-block text-center " >
         <StyledLink to={`/`}>
        <Branding
          href="#"
          className=" nav-letters navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          <Logo className="poke-logo" src={log} />
         PokeDex
        </Branding>
          </StyledLink>
          </div>
        <div className="center-v col-12 col-md-6 col-sm-3 center-block text-center">
          <SearchPokemon/>
        </div>
        </div>

      </nav>
    );
  }
}