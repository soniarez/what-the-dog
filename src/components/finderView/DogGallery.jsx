import React, { useState, useEffect } from "react";
import getBreedImages from "../../helpers/getBreedImages";

const DogGallery = () => {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        const getAllImages= async () => {
          try {
            const imagesFromApi = await getBreedImages("akita");
            setDogImages(imagesFromApi.message)
          } catch (err) {
            console.log(err, "error fetching data from API");
          }
        };
        getAllImages();
      }, []);

  return (
    <div>
      <p>Dog Gallery</p>
      <ul>
        {dogImages.map((image) => (
          <li>
            <img src={image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogGallery;
