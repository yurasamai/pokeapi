import React, { Component } from 'react';
import Axios from 'axios';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    shinyImageUrl:'',
    types: [],
    description: '',
    height: '',
    weight: '',
    themeColor: '#EF5350'
  };

  async componentDidMount() {
    let { pokemonIndex } = this.props.match.params;

    // Url de pokeapi
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
   

    // Obtener información de pokemones
    const pokemonRes = await Axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    pokemonIndex = pokemonRes.data.id;
    const imageUrl = pokemonRes.data.sprites.front_default;
    const shinyImageUrl=pokemonRes.data.sprites.front_shiny

    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    const height =
      Math.round((pokemonRes.data.height)) / 10; //Convertimos a metros

    const weight =
      Math.round((pokemonRes.data.weight)) / 10; //Convertimos a kilogramos

    const types = pokemonRes.data.types.map(type => type.type.name);


    this.setState({
      imageUrl,
      shinyImageUrl,
      pokemonIndex,
      name,
      types,
      height,
      weight,
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-1">
                <h5>{this.state.pokemonIndex}</h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className=" col-md-3 ">
              <h3 className="mx-auto">Normal</h3>
                <img
                  src={this.state.imageUrl}
                  className="card-img-top rounded mx-auto mt-2"
                />
              </div>
              <div className=" col-md-3 ">
                <h3 className="mx-auto">Shiny</h3>
                <img
                  src={this.state.shinyImageUrl}
                  className="card-img-top rounded mx-auto mt-2"
                />
              </div>
              <div className="col-md-6">
                <h4 className="mx-auto">
                  {this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
                </h4>
                <div className="col-md-6">
                <div className="row">
                  <div className="col-6">
                    <h6 className="float-right">Height:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.height} m.</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-right">Weight:</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-left">{this.state.weight} Kg</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="float-right">Type:</h6>
                  </div>
                 <div className="col-6">
                 <div className="float-right">
                  {this.state.types.map(type => (
                    <span
                      key={type}
                      className="badge badge-pill mr-1"
                      style={{
                        backgroundColor: `#${TYPE_COLORS[type]}`,
                        color: 'white'
                      }}
                    >
                      {type
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </span>
                  ))}
                </div>
                 </div>


                </div>
            </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">
            All the data  was obtained from{' '}
            <a href="https://pokeapi.co/" target="_blank" className="card-link">
              PokeAPI.co
            </a>
          </div>
        </div>
      </div>
    );
  }
}