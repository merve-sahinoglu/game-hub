import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";

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

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (query: GameQuery) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: query.genre?.id,
        platforms: query.platform?.id,
        ordering: query.sortOrder,
      },
    },
    [query]
  );

export default useGames;

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     const controller = new AbortController();
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };
