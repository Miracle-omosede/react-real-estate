import React from "react";
import SmartHome from "../images/smart-home.jpg";
import { DiAndroid } from "react-icons/di"


const Service = () => {
  return (
    <div className="h-full bg-black font-poppins">
      <div className="grid grid-cols-12">
        <div className="col-span-6 relative">
          <img
            src={SmartHome}
            className="h-[600px] object-cover w-full"
            alt=""
          />
          <div className="absolute my-8 mr-10 shadow-xl text-white bottom-0 right-0 bg-slate-400 py-2 cursor-pointer px-4 rounded-full">
            <span></span>
            <span>Take Tour</span>
          </div>
        </div>
        <div className="col-span-6 p-28 flex items-center justify-center flex-col gap-3">
          <div className="flex items-center text-gray-300 justify-center gap-3">
            <div className="text-6xl flex items-center justify-center">
                <DiAndroid />
            </div>
            <div>
              <h4 className="font-semibold text-3xl uppercase">
                Android powered homes
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                laborum recusandae tempore eos aliquam delectus quisquam
                voluptates sunt? Distinctio, odio?
              </p>
            </div>
          </div>
          <div className="flex items-center text-gray-300 justify-center">
            <div></div>
            <div>
              <h4 className="font-semibold text-3xl uppercase">
                Take virtual Tours in our homes
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                laborum recusandae tempore eos aliquam delectus quisquam
                voluptates sunt? Distinctio, odio?
              </p>
            </div>
          </div>
          <div className="flex items-center text-gray-300 justify-center">
            <div></div>
            <div>
              <h4 className="font-semibold text-3xl uppercase">Wifi homes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                laborum recusandae tempore eos aliquam delectus quisquam
                voluptates sunt? Distinctio, odio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
