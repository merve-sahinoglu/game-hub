import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games != undefined
          ? games.map((game) => <li key={game.id}>{game.name}</li>)
          : ""}
      </ul>
    </div>
  );
};

export default GameGrid;
