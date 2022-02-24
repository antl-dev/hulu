import { Thumbnail } from "./Thumbnail";
import FlipMove from "react-flip-move";

export function Results({ results }) {
  console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex justify-center">
      {results.map((item) => (
        <Thumbnail key={item.id} data={item} />
      ))}
    </FlipMove>
  );
}
