import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileImage from "/profile.png"
import { LazyLoadImage } from "react-lazy-load-image-component";

const App = () => {
  const data = [
    {
      id: 1,
      icon: <FaTelegramPlane size={25} />,
      name: "Telegram",
      url: "https://t.me/Zyarexx",
    },
    {
      id: 2,
      icon: <AiFillInstagram size={26} />,
      name: "Instagram",
      url: "https://instagram.com/rakarmp_",
    },
    {
      id: 3,
      icon: <FaGithub size={25} />,
      name: "Github",
      url: "https://github.com/rakarmp",
    },
  ];
  return (
    <div className="gradient-background flex items-center justify-center flex-col">
      {/* ----------- Animations-------START */}
      {/* <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      {/* ------------- Animations-------END */}
      <div className=" flex items-center justify-center flex-col ">
        <div className=" flex items-center justify-center gap-2 flex-col">
          {/* <img
            className=" mix-blend-difference w-[100px] rounded-full bg-black "
            src="/profile.png"
            alt="Zyarexx"
          /> */}
          <LazyLoadImage src={ProfileImage} alt="Zyarexx" className=" mix-blend-difference w-[100px] rounded-full bg-black "/>
          <h2 className=" text-white text-[1.65rem] font-bold">
            Zyarexx (Rakarmp)
          </h2>
          <div className=" w-[360px] text-center">
            <p className=" text-white text-[1rem] font-medium">
              Freelancing | Web Development | Tweak's Maximizing Android
            </p>
          </div>
        </div>
        <div className=" mt-8 space-y-4">
          {data.map((i) => (
            <Link
              to={i.url}
              target="_blank"
              key={i.id}
              className=" flex items-center gap-2 w-[320px] bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40"
            >
              {i.icon}
              <p className=" font-medium ">{i.name}</p>
            </Link>
          ))}
        </div>

        <div className=" w-[320px] text-justify mt-6 text-[10.38px] text-white">
          <p>
            * If the Telegram link is not working, you can 
            see the telegram link in the instagram link bio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;