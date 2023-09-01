import React from "react";
import vrlady from "../images/virtualtour.png";
import { navigation } from "../data";
import { Link } from "react-router-dom";

const NavMobile = ({ onLinkClick }) => {
  return (
    <div className="bg-white w-full h-full shadow-2xl relative font-Bricolage">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <Link
              to={item.link}
              onClick={() => {
                onLinkClick(); // Call the parent component's callback
              }}
            >
              <li>
                <a className="text-xl font-bold capitalize" href="#">
                  {item.name}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="absolute bottom-0">
        <img src={vrlady} alt="vr-lady" />
      </div>
    </div>
  );
};

export default NavMobile;
