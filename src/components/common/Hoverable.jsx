function Hoverable(props) {
  return (
    <li
      className="relative w-36 md:w-40 2xl:w-48 rounded-3xl shadow-md lg:hover:scale-105"
      onMouseEnter={() => props.setHovered(props.index)}
      onMouseLeave={() => props.setHovered(null)}
    >
      <a href={props.url}>
        <div
          className={`${
            props.hovered === props.index ? "" : "lg:opacity-0"
          } text-slate-100 absolute z-10 aspect-[3/4] w-full h-full rounded-3xl flex flex-col items-center justify-end pb-1 lg:pb-0 lg:justify-center lg:transition-opacity lg:duration-150 lg:ease-out tracking-wide text-lg bg-gradient-to-b from-transparent lg:from-[#0a3e4b]/50 from-60% to-[#0a3e4b]/70 lg:to-[#0a3e4b]/50 to-90%`}
        >
          {props.activity}
        </div>

        <img
          src={props.photo}
          alt={props.activity}
          className="z-0 aspect-[3/4] w-full h-full object-cover object-center rounded-3xl"
        />
      </a>
    </li>
  );
}

export default Hoverable;
