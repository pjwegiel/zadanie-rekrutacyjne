import React from 'react';
import {
  Typography,
  Container,
  GridList,
  GridListTile,
  makeStyles
} from '@material-ui/core';

interface Pokemon {
  name: string;
  image: string;
  stats: Array<{
    // eslint-disable-next-line camelcase
    base_stat: string;
    stat: {
      name: string;
    };
  }>;
}
const useStyles = makeStyles({
  image: {
    height: '45vh',
    width: '45vw'
  },
  container: {
    textAlign: 'center'
  }
});

export const FullPokemon = ({ pokemon }: { pokemon: Pokemon }): JSX.Element => (
  <Container maxWidth="md" className={useStyles().container}>
    <img className={useStyles().image} src={pokemon.image} alt={pokemon.name} />
    <Typography variant="h1">{pokemon.name}</Typography>
    <GridList cols={2}>
      <GridListTile>
        <Typography variant="h2" color="error">
          {pokemon.stats[0].base_stat}
        </Typography>
        <Typography variant="h3">{pokemon.stats[0].stat.name}</Typography>
      </GridListTile>
      <GridListTile>
        <Typography variant="h2" color="textSecondary">
          {pokemon.stats[1].base_stat}
        </Typography>
        <Typography variant="h3">{pokemon.stats[1].stat.name}</Typography>
      </GridListTile>
      <GridListTile>
        <Typography variant="h2" color="primary">
          {pokemon.stats[2].base_stat}
        </Typography>
        <Typography variant="h3">{pokemon.stats[2].stat.name}</Typography>
      </GridListTile>
      <GridListTile>
        <Typography variant="h2" style={{ color: 'purple' }}>
          {pokemon.stats[3].base_stat}
        </Typography>
        <Typography variant="h3">{pokemon.stats[3].stat.name}</Typography>
      </GridListTile>
    </GridList>
  </Container>
);
