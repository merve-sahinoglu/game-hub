import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  // const { data, error, isLoading } = useData<Genre>("genres");

  return (
    <ul>
      {data.map((x) => (
        <li key={x.id}>{x.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
