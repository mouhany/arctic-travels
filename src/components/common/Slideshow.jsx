function Slideshow(props) {
  return (
    <div key={props.index} className="flex flex-col gap-3 items-center ">
      <a href={props.url} target="_blank" className="block w-full">
        <img
          src={props.photo}
          alt={props.location}
          className="w-full h-auto aspect-video object-cover object-center rounded-3xl"
        />
      </a>
      <p className="text-2xl serif">{props.location}</p>
    </div>
  );
}

export default Slideshow;
