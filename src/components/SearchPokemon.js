import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default class SearchPokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {pokemonIndex: ' ',
                  name: ' ',
                  };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {

      this.setState({pokemonIndex:event.target.value.toLowerCase() }); 

    //console.log(pokemonIndex);
  }

  handleClick(e){

   
  }

  render() {
    return (
      <div class="row ">
       
        <div class="center-v col-md-6 form-group align-middle ">
          
          <input
            placeholder="Pokemon"
            className="form-control mx-auto"
            value={this.state.value}
            style={{
              backgroundColor: 'white transparent',
              height: '1.35em',
              width: '95%',
              borderRadius: '15px',
              opacity: '0.8',
              fontSize: '1.75em'
              
            }}
            onChange={this.handleChange}
          />
        
          </div>
          <div class="center-v col-md-6 form-group ">

          <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
            <button type="submit"  class="btn btn-dark mb-2 align-middle" >Catch it</button>
            </StyledLink>
            <StyledLink to={`/`}>
            <button type="submit"  class="btn btn-dark mb-2 align-middle" >Back</button>
            </StyledLink>
          </div>
      
      </div>
    );
  }
}
