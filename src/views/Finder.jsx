import React, { useState } from 'react';
import SideBar from '../components/finderView/SideBar';
import DogGallery from '../components/finderView/DogGallery';
import DogCreeping from '../components/finderView/DogCreeping';

const Finder = () => {
  const [selectedBreed, setSelectedBreed] = useState(['chihuahua']);

  const updateCurrentSelected = breedList => {
    if (selectedBreed.indexOf(breedList) != -1) {
      selectedBreed.splice(selectedBreed.indexOf(breedList), 1);
      setSelectedBreed([...selectedBreed]);
    } else {
      setSelectedBreed(current => [...current, breedList]);
    }
  };

  return (
    <div className="flex flex-row w-full h-screen overflow-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-100 via-violet-100 to-purple-100">
      <div className="w-[10%] min-w-[120px] max-w-[120px]">
        <SideBar
          updateCurrentSelected={updateCurrentSelected}
          selectedBreed={selectedBreed}
        />
      </div>
      <div className=" flex flex-col justify-center items-center border-l border-gray-300 mx-0 w-full">
        <DogCreeping />
        <DogGallery selectedBreed={selectedBreed} />
      </div>
    </div>
  );
};

export default Finder;
