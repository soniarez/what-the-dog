import React from "react";
import SideBar from "../components/finderView/SideBar";
import DogGallery from "../components/finderView/DogGallery";

const Finder = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-white">
      <div className="min-w-fit max-w-fit">
        <SideBar />
      </div>
      <div className="border border-gray-500 px-12 w-full h-full">
        <h1 className="text-4xl font-semibold">Find your Dog</h1>
        <DogGallery />
      </div>
    </div>
  );
};

export default Finder;
