import Navbar from "./components/Navbar";
import placementImg from "./assets/images/placement-image.jpg";
import AboutSectionCard from "./components/AboutSectionCard";
import aboutCardData from "./components/aboutCardData";
import { FaRegMessage } from "react-icons/fa6";

function App() {
  const aboutCardElement = aboutCardData.map((data) => (
    <AboutSectionCard
      key={data.id}
      title={data.title}
      text={data.text}
      img={data.img}
    />
  ));
  return (
    <>
      <section className="bg-white min-h-screen w-full grid place-items-center">
        <main className="max-w-[990px]">
          <Navbar />
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div>
              <div className="text-7xl font-bold uppercase w-full tracking-wide">
                At <span className="text-[#A36A28]">AOAJC, </span>
                We preach <br />
                the bible
              </div>
              <div className="mt-5 flex gap-4">
                <div className="w-10 h-[160px] bg-black rounded-md"></div>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  totam animi sit accusantium itaque consequatur minus, laborum
                  omnis consequuntur quibusdam impedit dignissimos quos quas
                  voluptatum neque numquam sed tempore in!
                </p>
              </div>
            </div>
            <img
              src={placementImg}
              alt="pastor img"
              className="w-full h-[400px] rounded-md"
            />
          </div>
        </main>

        <div className="bg-[#F9F6F4] mt-5 w-full grid place-items-center">
          <div className="max-w-[990px] py-9">
            <div className="mb-5 font-semibold tracking-wide flex items-center justify-between">
              <h3 className="text-2xl">About</h3>
              <button className="flex items-center gap-2 duration-300 transition-all hover:bg-gray-700 font-normal py-3 px-6 bg-gray-800 text-white text-sm rounded-full border-none cursor-pointer">
                <span>
                  <FaRegMessage />
                </span>
                Message us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">{aboutCardElement}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
