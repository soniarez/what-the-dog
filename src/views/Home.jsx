import React from "react";
import { useNavigate } from "react-router-dom";
import dogGif from "../assets/images/doggif.gif";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-center text-6xl text-white font-black">What The Dog</h1>
      <img
        src={dogGif}
        className="w-48 h-48 rounded-2xl mt-20 shadow-2xl shadow-gray-900"
        alt="dog gif"
      ></img>
      <button
        onClick={() => navigate("/finder")}
        className=" w-auto h-auto bg-[#7938ad] hover:bg-[#5e43d1] text-2xl text-white font-bold  py-2 px-4 rounded mt-20 "
        type="button"
      >
        Start!
      </button>
    </div>
  );
};

export default Home;
