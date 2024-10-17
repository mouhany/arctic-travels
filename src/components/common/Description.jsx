function Description(props) {
  return (
    <div className="max-w-prose px-6 py-12 flex flex-col gap-6">
      <h3 className="title">{props.title}</h3>
      <div className="flex flex-col gap-3">
        {props.p.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <button className="cta text-lg self-center">{props.cta}</button>
    </div>
  );
}

export default Description;
