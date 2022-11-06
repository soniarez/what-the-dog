import React from "react";
import { useNavigate } from "react-router-dom";
import dogGif from "../assets/images/doggif.gif";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-6xl text-white font-black">What The Dog</h1>
      <img
        src={dogGif}
        className="w-40 h-40 rounded-2xl mt-20"
        alt="dog gif"
      ></img>
      <button
        onClick={() => navigate("/finder")}
        className="bg-[#7938ad] hover:bg-[#5e43d1] text-white font-bold py-2 px-4 rounded mt-20"
        type="button"
      >
        Start!
      </button>
    </div>
  );
};

export default Home;
