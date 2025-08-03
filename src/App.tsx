import CardForm from "./components/feature/cardForm";
import CardBack from "./components/feature/cardBack";
import CardFront from "./components/feature/cardFront";

import bgDesktop from "./assets/bg-main-desktop.png";
import bgMobile from "./assets/bg-main-mobile.png";

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-purple-950 font-space flex">
      <div className="w-full min-h-auto lg:h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 max-h-[380px] lg:max-h-full lg:h-screen relative ">
          <picture>
            <source srcSet={bgDesktop} media="(min-width: 1024px)" />
            <img
              src={bgMobile}
              alt="gradient"
              className="h-2/3 lg:h-full w-full lg:w-2/3"
            />
          </picture>

          <div className="absolute pt-7 flex flex-col gap-8 text-white top-0 lg:top-1/2 left-1/2 lg:-translate-y-1/2 -translate-x-1/2">
            <CardFront />
            <CardBack />
          </div>
        </div>

        <div className="flex-1">
          <CardForm />
        </div>
      </div>
    </div>
  );
}

export default App;
