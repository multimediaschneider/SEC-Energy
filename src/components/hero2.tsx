import Dots from "./dotsanimation";

export default function Hero() {
  return (
    <div className="pl-40 w-4/5 flex pt-20 sm:pt-32 md:pt-40 lg:pt-60 pb-12 sm:pb-16 md:pb-20 lg:pb-24 text-white">
      <div className=" flex items-start flex-col font-light px-4">
        <div className="text-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            SEC Energieconsulting
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-7 lg:mb-8 font-extralight">
            Schneider Engineering Consulting
          </p>
        </div>
        {/* <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
          Empowering a sustainable future through innovative green energy
          solutions
        </p> */}
        <Dots />
      </div>
    </div>
  );
}
