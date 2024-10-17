import passesImage from "../assets/nicolai-berntsen-VXiG4N229uY-unsplash.png";
import Description from "./common/Description";
import { passesText } from "./data/passesText";

const descPasses = <Description {...passesText} />;

function Passes() {
  return (
    <section
      id="passes"
      className="mx-auto flex flex-col lg:flex-row w-full items-center justify-center min-h-screen"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        {descPasses}
      </div>
      <a
        href="https://unsplash.com/photos/person-skiing-on-snow-with-gear-set-VXiG4N229uY"
        target="_blank"
        className="w-full lg:w-1/2 h-full"
      >
        <img src={passesImage} alt="Passes" className="" />
      </a>
    </section>
  );
}

export default Passes;
