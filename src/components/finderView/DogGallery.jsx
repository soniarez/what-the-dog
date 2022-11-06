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

  return (
    <div
      key={selectedBreed.length}
      className="overflow-scroll overflow-x-hidden w-full h-screen"
    >
      <p className="text-center font-semibold my-4">
        Search your favorite dogs by bread or subbreed!
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
        <Masonry columnsCount={3} gutter="10px">
          {dogImages
            ? dogImages.map((item, index) => (
                <img
                  className="flex w-full rounded shadow-md hover:scale-105 duration-500"
                  src={item}
                  key={index}
                  alt="dog pictures"
                  /* style={{ width: "100%", display: "block" }} */
                />
              ))
            : null}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default DogGallery;
