import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4500">
            <img
              src="/HeroCarousel-pics/DeWatermark.ai_1710827225330.jpg"
              className="d-block w-100 w-full"
              alt="Hero Slide"
            />

            <div className="absolute top-10 sm:top-52 md:top-24 md:px-24 lg:px-72 lg:top-52 flex sm:px-80 px-16">
              <div className="flex flex-col sm:gap-3 gap-2 lg:gap-3 lg:pb-10 py-8">
                <span className="sm:text-5xl text-[13px] text-white font-bold lg:py-12">
                  Building careers. Building organisations.
                </span>
                <span className="sm:text-xl text-[9px] text-white font-bold">
                  Fusion Byte IT Consultation is Alberta's leading executive search and talent
                  advisory firm, proudly shaping the future of multinationals
                  and Albertan businesses for over years
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Optionally remove these if you're not planning to add more slides later */}
        {/* <button ...>Previous</button> */}
        {/* <button ...>Next</button> */}
      </div>
    </div>
  );
}

export default HeroCarousel;
