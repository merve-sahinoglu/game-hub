import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
