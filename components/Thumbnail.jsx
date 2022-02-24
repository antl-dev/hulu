import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

export const Thumbnail = forwardRef(({ data }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
          `${BASE_URL}${data.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{data.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {data.title || data.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {data.media_type && `${data.media_type} • `}
          {data.release_date || data.first_air_date}
          {" • "}
          <ThumbUpIcon className="h-5 mx-2" /> {data.vote_count}
        </p>
      </div>
    </div>
  );
});
