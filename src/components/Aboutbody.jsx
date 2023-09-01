import React from "react";
import interior from "../images/interior.jpg"

const Aboutbody = () => {
  return (
    <div className="bg-black">
      <div className="flex md:flex-row flex-col items-center justify-between w-full md:max-w-[1100px]  md:mx-auto md:gap-4 px-10">
        <div className="md:w-[400px] md:h-[350px]">
          <div className="flex flex-col">
            {/* header */}
            <h1 className="text-[red] font-semibold text-[7rem] font-londrina">
              01
            </h1>

            {/* mini heading */}
            <h4 className="capiitalize font-bold text-white font-poppins text-3xl">
              Unique Design.
            </h4>
            <p className="text-white font-poppins text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dignissimos. Numquam veniam corporis delectus sunt
              eum fugit ea voluptatibus ad?
            </p>
          </div>
        </div>
        <div className="md:w-[400px]  md:h-[350px]">
          {" "}
          <div className="flex flex-col">
            {/* header */}
            <h1 className="text-[red] font-semibold text-[7rem] font-londrina">
              02
            </h1>

            {/* mini heading */}
            <h4 className="capiitalize font-bold text-white font-poppins text-3xl">
              Smart Homes.
            </h4>
            <p className="text-white font-poppins text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dignissimos. Numquam veniam corporis delectus sunt
              eum fugit ea voluptatibus ad?
            </p>
          </div>
        </div>
        <div className="md:w-[400px]  md:h-[350px]">
          {" "}
          <div className="flex flex-col">
            {/* header */}
            <h1 className="text-[red] font-semibold text-[7rem] font-londrina">
              03
            </h1>

            {/* mini heading */}
            <h4 className="capiitalize font-bold text-white font-poppins text-3xl">
              Best Security.
            </h4>
            <p className="text-white font-poppins text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, dignissimos. Numquam veniam corporis delectus sunt
              eum fugit ea voluptatibus ad?
            </p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-12 w-full md:px-0 gap-5 px-10 md:max-w-[1100px] mx-auto py-40">
        <div className="col-span-12 md:col-span-6  order-2 text-white font-poppins flex items-center justify-center text-xl flex-col">
          <h1 className="uppercase flex flex-col items-start font-semibold text-5xl text-left my-5 justify-start w-full"><span className="text-[red] underline">Don't </span> <span>miss out on the experience</span></h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos assumenda voluptate sit explicabo aliquam ducimus eum repellat voluptatum aperiam! Perspiciatis cupiditate natus, minima officia dolore dolor veritatis tempore? Consectetur culpa quos officiis architecto eaque quaerat molestiae perspiciatis iste, quod ea
          <div className="flex w-full my-5 items-start justify-start">
          <button className="btn"> 
          learn more
        </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 relative flex order-1 items-center justify-center w-full">
          <div className="w-[300px] h-[300px] bottom-0 absolute right-0 bg-[red] rounded-xl md:block hidden"> 
          </div>
          <img src={ interior } alt="" className="rounded-xl border-white border-2 md:w-2/3 md:h-[500px] object-cover" style={{
            zIndex: 9
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Aboutbody;
