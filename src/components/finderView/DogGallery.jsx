import React, { useState, useEffect } from "react";
import getBreedImages from "../../helpers/getBreedImages";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const DogGallery = () => {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        const getAllImages= async () => {
          try {
            const imagesFromApi = await getBreedImages("beagle");
            setDogImages(imagesFromApi.message)
          } catch (err) {
            console.log(err, "error fetching data from API");
          }
        };
        getAllImages();
      }, []);

  return (

    <div className="flex flex-col justify-center items-center h-screen">
      <p>Dog Gallery</p>
      <ImageList variant="masonry" cols={3} gap={8} className="sm:columns-2">
        {dogImages.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  

    
    {/*   <ul>
        {dogImages.map((image) => (
          <li>
            <img src={image}></img>
          </li>
        ))}
      </ul> */}
    </div>


  );
};

export default DogGallery;
