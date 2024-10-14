function Region(props) {
  return (
    <div key={props.index} className="flex flex-col gap-3">
      <div className="size-56">
        <img
          src={props.photo}
          alt={props.location}
          className="aspect-square w-full h-full object-cover object-center shadow-md rounded-xl"
        />
      </div>

      <p className="uppercase text-sm">{props.location}</p>
    </div>
  );
}

export default Region;
