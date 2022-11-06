import React, { useState } from "react";
import SideBar from "../components/finderView/SideBar";
import DogGallery from "../components/finderView/DogGallery";

const Finder = () => {
  const [selectedBreed, setSelectedBreed] = useState(["akita"]);

  const updateCurrentSelected = (breedList) => {
    if (selectedBreed.indexOf(breedList) != -1) {
      selectedBreed.splice(selectedBreed.indexOf(breedList), 1);
      setSelectedBreed([...selectedBreed]);
    } else {
      setSelectedBreed((current) => [...current, breedList]);
      console.log(selectedBreed);
    }
  };

  return (
    <div className="flex flex-row w-full h-screen overflow-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-100 via-violet-100 to-purple-100">
      <div className="min-w-fit max-w-fit">
        <SideBar updateCurrentSelected={updateCurrentSelected} />
      </div>
      <div className=" flex flex-col justify-center items-center border border-gray-500 px-12 w-full">
        <h1 className="text-center text-4xl font-black text-indigo-600">Find your Dog</h1>
        <DogGallery selectedBreed={selectedBreed} />
      </div>
    </div>
  );
};

export default Finder;
