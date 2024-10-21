import resortsImage from "../assets/sonalika-vakili-jIf8o8tG_DQ-unsplash.jpg";
import Description from "./common/Description";
import { resortsText } from "./data/resortsText";

const descResorts = <Description {...resortsText} />;

function Resorts() {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent via-[#eaeff2] via-[#f3f2ed] to-transparent h-40 z-10 -mt-20"></div>
      <section
        id="resorts"
        className="p-6 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${resortsImage})` }}
      >
        {descResorts}
        <div className="md:w-3/4">image</div>
      </section>
    </>
  );
}

export default Resorts;
