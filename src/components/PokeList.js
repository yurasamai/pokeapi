import React, { Component } from 'react';

import PokeCard from './PokeCard';
import Loading from './Loading';
import axios from 'axios';

export default class PokeList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=200',
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? ( //Si se recibieron los datos, muestra  la PokeList  y si no, muestra una imagen de "Loading"
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}