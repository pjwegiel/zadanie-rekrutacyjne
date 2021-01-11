import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

interface Pokemon {
    name: string;
    image: string;
    stats: Array
};

export const FullPokemon = ({pokemon} : {pokemon: Pokemon}) => {
    return (
        <Container maxWidth={'md'} align='center'>
            <img style={{height: '45vh', width: '45vw'}} src={pokemon.image} alt={pokemon.name} />
            <Typography variant='h1'>{pokemon.name}</Typography>
            <GridList cols={2}>
                <GridListTile >
                    <Typography variant='h2' color={'error'}>
                        {pokemon.stats[0].base_stat}
                        
                    </Typography>
                    <Typography variant='h3'>
                        {pokemon.stats[0].stat.name}
                        
                    </Typography>
                    </GridListTile>
                    <GridListTile >
                    <Typography variant='h2' color={'textSecondary'}>
                        {pokemon.stats[1].base_stat}
                    </Typography>
                    <Typography variant='h3'>
                        {pokemon.stats[1].stat.name}
                    </Typography>
                    </GridListTile>
                    <GridListTile >
                    <Typography variant='h2' color={'primary'}>
                        {pokemon.stats[2].base_stat} 
                    </Typography>
                    <Typography variant='h3'>
                        {pokemon.stats[2].stat.name} 
                    </Typography>
                    </GridListTile>
                    <GridListTile >
                    <Typography variant='h2' style={{color: 'purple'}}>
                        {pokemon.stats[3].base_stat}
                        
                    </Typography>
                    <Typography variant='h3'>
                        {pokemon.stats[3].stat.name}
                    </Typography>
                    </GridListTile>
            </GridList>
        </Container>
    );
} 

