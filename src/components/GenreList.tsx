import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((x) => (
        <li key={x.id}>{x.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
