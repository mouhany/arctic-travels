import { HomeIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/outline";

function Card(props) {
  console.log(props.photo);
  return (
    <div className="shadow-md flex flex-col lg:flex-row rounded-3xl bg-white overflow-hidden max-w-md lg:max-w-lg">
      <a href={props.url} target="_blank" className="lg:w-64">
        <img
          src={props.photo}
          alt={props.title}
          className="aspect-video lg:aspect-[3/4] w-full h-full object-cover object-center"
        />
      </a>
      <div className="flex flex-col gap-3 p-6 text-sm">
        <div className="flex flex-row gap-6 items-center">
          <HomeIcon className="size-3" />
          <p>{props.title}</p>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <MapPinIcon className="size-3" />
          <p>{props.location}</p>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <StarIcon className="size-3" />
          <p>{props.rating}</p>
        </div>
        <p className="text-sm max-w-prose">{props.brief}</p>
      </div>
    </div>
  );
}

export default Card;
