import React from 'react';
import PlayerItem from './PlayerItem.jsx';
import GameItem from './GameItem.jsx';
import { games, players } from './defaults.js';

export default ({}) => {
  const defaultPlayers = players.map(player => <PlayerItem key={player.id} player={player}/>);
  const defaultGames = games.map(game => <GameItem key={game.id} game={game}/>);

  return (
    <div className="column is-one-quarter has-background-primary">
      <div className="container">
        <div className="level">
          Players
        </div>
        <div className="conatiner">
          <div className="list">
            { defaultPlayers }
          </div>
        </div>
      </div>
      <div className="container">
      <div className="level">
        Games
      </div>
      <div className="conatiner">
        <div className="list">
          { defaultGames }
        </div>
      </div>
    </div>
  </div>
  );
}
