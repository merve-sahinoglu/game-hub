import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

const GenreList = () => {
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
            <Text fontSize="lg">{x.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
