import axios from "axios";

// FETCHING ALL DOG IMAGES
const getBreedImages = async (breedNames) => {
  let dogImageListToRender = [];
  //console.log(breedNames)
  for (let i = 0; i < breedNames.length; i++) {
    
    try {
      let res = await axios.get(
        `https://dog.ceo/api/breed/${breedNames[i]}/images`
      );
      let breedsImageList =  res.data.message;
      dogImageListToRender = dogImageListToRender.concat(breedsImageList);
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  }

  //SORTING RAMDOMLY THE IMAGES
  dogImageListToRender.sort(() => Math.random() - 0.5);
  return dogImageListToRender;
};

export default getBreedImages;
