import React from "react";
import vrlady from "../images/virtualtour.png"

// import data
import { navigation } from "../data";

const NavMobile = () => {
  return (
    <div className="bg-white w-full h-full shadow-2xl relative font-Bricolage">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li>
              <a className="text-xl font-bold capitalize " href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

     <div className="absolute bottom-0">
        <img src={ vrlady } alt="vr-lady" />
    </div> 
    </div>
  );
};

export default NavMobile;
