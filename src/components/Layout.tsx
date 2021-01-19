import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { List } from './List';
import { FullPokemon } from './FullPokemon';

interface Pokemon {
  name: string;
  image: string;
  // eslint-disable-next-line camelcase
  stats: [{ base_stat: string; stat: { name: string } }];
}

export const Layout: React.FunctionComponent = (): JSX.Element => {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>({
    name: '',
    image: '',
    stats: [{ base_stat: '', stat: { name: '' } }]
  });
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <List passPokemon={setCurrentPokemon} />
        </Route>
        <Route path="/pokemon/">
          <FullPokemon pokemon={currentPokemon} />
        </Route>
      </Switch>
    </>
  );
};
