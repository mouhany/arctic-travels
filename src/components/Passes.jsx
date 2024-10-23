import passesImage from "../assets/michael-shannon-EjTQKin2Z2s-unsplash.jpg";
import Description from "./common/Description";
import { passesText } from "./data/passesText";
import Hoverable from "./common/Hoverable";
import { passesData } from "./data/passesData";

const descPasses = <Description {...passesText} />;

const allPasses = passesData.map((pass, index) => (
  <Hoverable key={index} index={index} {...pass} />
  // <div className="w-36">
  //   <img
  //     src={pass.photo}
  //     alt={pass.activity}
  //     className="aspect-[3/4] w-full h-full object-cover object-center rounded-3xl lg:hover:scale-105"
  //   />
  // </div>
));

function Passes() {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent via-[#d7dbdf] to-transparent h-40 z-10 -mt-20"></div>
      <section
        id="passes"
        className="py-12 min-h-screen bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${passesImage})` }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row-reverse w-full items-center justify-center min-h-screen">
          <div className="px-6 w-full lg:w-2/5 flex flex-col justify-center items-center md:max-w-prose">
            {descPasses}
          </div>
          <ul className="p-6 w-full lg:w-3/5 flex flex-row flex-wrap gap-6 items-center justify-center overflow-x-auto lg:rounded-3xl bg-gradient-to-b from-transparent to-slate-50/50">
            {allPasses}
          </ul>
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
