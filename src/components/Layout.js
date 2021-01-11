import React, {useState} from 'react'; 
import {Switch, Route} from 'react-router-dom';

import {Navbar} from './Navbar';
import {List} from './List';
import {FullPokemon} from './FullPokemon';

export const Layout = () => {
    const [currentPokemon, setCurrentPokemon] = useState({});
    return (
        <>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <List passPokemon={setCurrentPokemon}/>
            </Route>
            <Route path="/pokemon/">
                <FullPokemon pokemon={currentPokemon} />
            </Route>
        </Switch>
        </>
    );
} 