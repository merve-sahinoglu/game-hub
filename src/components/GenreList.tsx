import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  // const { data, error, isLoading } = useData<Genre>("genres");
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((x) => (
        <ListItem key={x.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(x.image_background)}
            ></Image>
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(x)}
            >
              {x.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
