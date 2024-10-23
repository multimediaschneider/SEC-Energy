import Dots from "./dotsanimation";

export default function Hero() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-4/5 relative min-h-screen flex items-center">
        <div className="w-full">
          <div className="flex flex-col text-emerald-700">
            <h1 className="text-8xl mb-6 font-bold">SEC Energieconsulting</h1>
            <p className="text-5xl mb-8 font-extralight">
              Schneider Engineering Consulting
            </p>
          </div>

          {/* Position Dots at the bottom-left */}
          <div className="absolute bottom-12 left-0">
            <Dots />
          </div>
        </div>
      </div>
    </div>
  );
}
