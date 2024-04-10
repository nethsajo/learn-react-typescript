export function MoviePoster({ poster }: { poster: string }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original${poster}`}
      className="w-40 shrink-0 rounded-md xl:w-96"
    />
  );
}
