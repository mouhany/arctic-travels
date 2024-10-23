function Hoverable(props) {
  return (
    <li className="w-36 md:w-40 2xl:w-48">
      <a href={props.url}>
        <img
          src={props.photo}
          alt={props.activity}
          className="aspect-[3/4] w-full h-full object-cover object-center rounded-3xl lg:hover:scale-105"
        />
      </a>
    </li>
  );
}

export default Hoverable;
