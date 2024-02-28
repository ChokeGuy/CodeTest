import { nike } from "../assets/index";

// eslint-disable-next-line react/prop-types
function Card({ title, cost, children }) {
  return (
    <div
      className="py-3 px-5 bg-white rounded-4xl col-span-full sm:col-span-5 md:col-span-3 lg:col-span-3 xl:col-span-3
       h-[60vh] max-sm:h-[75vh] md:w-64 max-ssm:w-[340px] max-sm:w-96
      overflow-hidden relative shadow-md"
    >
      <div className="absolute -top-1 -left-[18%] max-md:-left-[14%] bg-yellow size-40 rounded-[0%_0%_100%_24%] z-1"></div>
      <div className="pb-2 sticky left-0 right-0 z-50 top-0">
        <div className="pb-2 ">
          <img
            className="w-10 h-6 col-span-full"
            src={nike}
            alt="nike-logo"
          ></img>
        </div>
        <div className="col-span-full flex items-center justify-between text-[22px] text-black font-bold">
          <h1 className="capitalize">{title}</h1>
          {cost && <h1>{`$${cost}`}</h1>}
        </div>
      </div>
      <div className="relative z-20 overflow-scroll hidden-scroll-bar h-[85%] ssm:h-[88%] md:h-[84%]">
        {children}
      </div>
    </div>
  );
}
export default Card;
