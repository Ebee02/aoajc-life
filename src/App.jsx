import Navbar from "./components/Navbar";
import placementImg from "./assets/images/placement-image.jpg";

function App() {
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
      </section>
    </>
  );
}

export default App;
