function Carousel(props) {
  return (
    <li key={props.index} className="my-3 flex flex-col gap-3 z-20">
      <a href={props.url} target="_blank" className="size-56">
        <img
          src={props.photo}
          alt={props.location}
          className="aspect-square w-full h-full object-cover object-center shadow-md lg:hover:scale-105 lg:transition lg:duration-150 lg:ease-out rounded-3xl"
        />
      </a>

      <div className="flex flex-row justify-between items-center">
        <p className="text-sm">{props.location}</p>
      </div>
    </li>
  );
}

export default Carousel;
