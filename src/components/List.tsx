// eslint-disable-next-line object-curly-newline
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  GridListTile,
  GridList,
  GridListTileBar
} from '@material-ui/core';

interface Pokemon {
  name: string;
  url: string;
}
interface PokemonWithStats {
  name: string;
  image: string;
  // eslint-disable-next-line camelcase
  stats: [{ base_stat: string; stat: { name: string } }];
}
type Props = {
  passPokemon: Dispatch<SetStateAction<PokemonWithStats>>;
};

export const List = ({ passPokemon }: Props): JSX.Element => {
  const [pokemons, setPokemons] = useState<PokemonWithStats[]>([]);
  const [width, setWidth] = useState<number>(0);

  const capitalizeFirstLetter = (string: string) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get('https://pokeapi.co/api/v2/pokemon?')
        .then((response) => response.data.results)
        .catch((err) => err);
      const pokemonData: Array<PokemonWithStats> = await Promise.all(
        result.map(
          async (pokemon: Pokemon): Promise<PokemonWithStats> =>
            // eslint-disable-next-line implicit-arrow-linebreak
            axios.get(pokemon.url).then((response) => {
              const mainResult = response.data;
              return {
                name: capitalizeFirstLetter(mainResult.name),
                image: mainResult.sprites.other.dream_world.front_default,
                stats: mainResult.stats
              };
            })
        )
      );
      setPokemons(pokemonData);
    };
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    fetchData();
    return () => window.removeEventListener('resize', handleResize);
  }, [setPokemons, setWidth]);
  const cols = () => {
    if (width >= 1024) return 4;
    if (width >= 720) return 3;
    return 2;
  };
  return (
    <Container>
      <GridList cols={cols()}>
        {pokemons.map((pokemon, index) => (
          <GridListTile key={pokemon.name}>
            <img src={pokemon.image} alt={pokemon.name} />
            <Link
              to={{
                pathname: `/pokemon/${index}`
              }}
            >
              <button onClick={() => passPokemon(pokemon)} type="button">
                <GridListTileBar title={pokemon.name} />
              </button>
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};
