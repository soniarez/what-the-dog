import React, { useState, useEffect } from "react";
import getBreedImages from "../../helpers/getBreedImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const DogGallery = ({selectedBreed}) => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const imagesFromApi = await getBreedImages(selectedBreed);
        //console.log(imagesFromApi)
        setDogImages(imagesFromApi);
      } catch (err) {
        console.log(err, "error fetching data from API");
      }
    };
    getAllImages();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen">
      <p className="self-center">Dog Gallery</p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry columnsCount={3} gutter="10px">
          {dogImages
            ? dogImages.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt="dog pictures"
                  style={{ width: "100%", display: "block" }}
                />
              ))
            : null}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default DogGallery;
