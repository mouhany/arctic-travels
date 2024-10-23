// import passesImage from "../assets/nicolai-berntsen-VXiG4N229uY-unsplash.png";
import Description from "./common/Description";
import { passesText } from "./data/passesText";
import { passesData } from "./data/passesData";

const descPasses = <Description {...passesText} />;

const allPasses = passesData.map((pass, index) => (
  <div className="size-56">
    <img
      src={pass.photo}
      alt={pass.activity}
      className="aspect-16/9 w-full h-full object-cover object-center"
    />
  </div>
));

function Passes() {
  return (
    <>
      {/* <div className="absolute w-full bg-gradient-to-b from-transparent via-[#d7dbdf] to-transparent h-40 z-10 -mt-20"></div> */}
      <section
        id="passes"
        className="mx-auto flex flex-col lg:flex-row w-full items-center justify-center min-h-screen"
      >
        <div className="flex flex-row flex-wrap">{allPasses}</div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          {descPasses}
        </div>
        {/* <a
          href="https://unsplash.com/photos/person-skiing-on-snow-with-gear-set-VXiG4N229uY"
          target="_blank"
          className="w-full lg:w-1/2 h-full"
        >
          <img src={passesImage} alt="Passes" className="" />
        </a> */}
      </section>
    </>
  );
}

export default Passes;
