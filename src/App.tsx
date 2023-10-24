import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";
import PlotformSelector from "./components/PlotformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // const [selectedGenre, setSelectedGenres] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav""aside main"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        {/* <GridItem area="aside">
          <GenreList
            onSelectGenre={(genre) => setSelectedGenres(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem> */}
        <GridItem area="aside">
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({
                ...gameQuery,
                genre,
              })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        {/* <PlotformSelector
          setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        /> */}
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlotformSelector
              setSelectedPlatform={(platform) =>
                setGameQuery({
                  ...gameQuery,
                  platform,
                })
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>

          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({
                ...gameQuery,
                sortOrder,
              })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </Flex>
        {/* <GameGrid
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
        />
      </GridItem> */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
