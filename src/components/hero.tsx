import Dots from "./dotsanimation";

export default function Hero() {
  return (
    <div className="flex items-center justify-center pt-60 pb-24 text-white ">
      <div className="flex flex-col text-center font-light ">
        <h1 className="text-8xl mb-6">SEC Energieconsulting</h1>
        <p className="text-5xl mb-8 font-extralight">
          Schneider Engineering Consulting
        </p>
        {/* <p className="text-xl mb-8">
          Empowering a sustainable future through innovative green energy
          solutions
        </p> */}
        <Dots />
      </div>
    </div>
  );
}
