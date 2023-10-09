import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {games != undefined
          ? games.map((game) => <GameCard key={game.id} game={game}></GameCard>)
          : ""}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
