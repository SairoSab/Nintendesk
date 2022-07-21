import React, { FC } from 'react';

interface GamelistProps {
  games?: [String]
}

const Gamelist: FC<GamelistProps> = (props) => {
  console.log(props)
  const renderGames = () => {
    if (!('games' in props)) {
      return
    }
    return props.games!.map((game) => (<p>{game}</p>))
  }
  return (
    <div data-testid="Gamelist">
      <p>Gamelist Component</p>
      {renderGames()}
    </div>
  )
};

export default Gamelist;