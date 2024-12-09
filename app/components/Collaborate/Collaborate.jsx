import statue from "@/assets/images/statue.png";

export default function Collaborate() {
  return (
    <section className="h-screen mt-[15vh]">
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <div className="w-full h-full">
            {/* eslint-disable-next-line */}
            <img src={statue.src} className="hero-image" alt="statue" />
          </div>
        </div>

        <div className="w-1/2 flex items-center">
          <div className="w-4/5">
            <h1 className="text-white text-[8rem] leading-[8rem]">
              LET&apos;S CREATE TOGETHER
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
