function Carousel(props) {
  return (
    <li key={props.index} className="my-3 flex flex-col gap-3">
      <div className="size-56">
        <img
          src={props.photo}
          alt={props.location}
          className="aspect-square w-full h-full object-cover object-center shadow-md rounded-xl"
        />
      </div>

      <div className="flex flex-row justify-between items-center">
        <a href={props.url} className="text-sm">
          {props.location}
        </a>
      </div>
    </li>
  );
}

export default Carousel;
