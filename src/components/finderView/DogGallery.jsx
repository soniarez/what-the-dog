import React, { useState, useEffect } from "react";
import getBreedImages from "../../helpers/getBreedImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const DogGallery = ({ selectedBreed }) => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const imagesFromApi = await getBreedImages(selectedBreed);
        //console.log(selectedBreed)
        setDogImages(imagesFromApi);
      } catch (err) {
        console.log(err, "error fetching data from API");
      }
    };
    getAllImages();
  }, [selectedBreed]);

  //IF THERE IS NO SELECTION
  const emptySelection = () => {
    if (dogImages.length === 0) {
      return (
        <p className="text-center text-m text-black cursor-default">
          Ouch! Your have to select at least one doggo 🐶
        </p>
      );
    }
  };

  return (
    <div
      key={selectedBreed}
      className="overflow-scroll overflow-x-hidden w-full h-screen p-4"
    >
      <p className="text-center font-semibold text-indigo-600 my-4 cursor-default">
        Search your favorite dogs by bread or sub-breed!
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
        <Masonry columnsCount={3} gutter="10px" >
          {dogImages ? (
            dogImages.map((item, index) => (
              <img
                className="flex w-full rounded shadow-md hover:scale-105 duration-500"
                src={item}
                key={index}
                alt="dog pictures"
                role="img"
                data-testid="dog-gallery"
              />
            ))
          ) : (
            <p>Doggos are loading...</p>
          )}
          {emptySelection()}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default DogGallery;
