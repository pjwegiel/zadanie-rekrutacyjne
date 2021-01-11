import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


export const List = ({passPokemon} : {passPokemon: (pokemon: object) => void}) => {
    const [pokemons, setPokemons] = useState<any[]>([]);

    interface Pokemon {
        name: string,
        url: string
    };

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => (response.data.results)).catch(err => console.log(err));
            const pokemonData: Array<object> = await Promise.all(result.map(async (pokemon : Pokemon): Promise<object> => {
                return await axios.get(pokemon.url).then(response => {
                    const mainResult = response.data;
                    return {
                        name: mainResult.name.charAt(0).toUpperCase() + mainResult.name.slice(1),
                        image: mainResult.sprites.other.dream_world.front_default,
                        stats: mainResult.stats
                    }
                }); 
            }));
            setPokemons(pokemonData);
        };
        fetchData();

    }, [setPokemons]);

    return (
        <Container>
            <GridList cols={4}>
                {pokemons.map((pokemon, index) => {
                    passPokemon(pokemon);
                    return (
                    <GridListTile key={index}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <Link to={{
                            pathname: "/pokemon/" + index,
                            state: {pokemon}
                        }} pokemon={pokemon} index={index}>
                            <GridListTileBar title={pokemon.name} onClick={() => passPokemon(pokemon)} />
                        </Link>
                    </GridListTile>
                )})}
            </GridList>
        </Container>
    );
};

List.propTypes = {
    passPokemon: PropTypes.func.isRequired
};