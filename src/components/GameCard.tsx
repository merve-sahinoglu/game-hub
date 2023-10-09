import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card
        borderRadius={10}
        overflow="hidden"
        height={{ sm: 10, md: 22, lg: 33, xl: 40 }}
      >
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
