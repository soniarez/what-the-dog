import axios from "axios";

// FETCH RAMDOM IMAGE TO RENDER FIRST TIME
const getRandomBreedImage = async (breedNames) => {
  let dogImageListToRender = [];
  //console.log(breedNames)
  for (let i = 0; i < breedNames.length; i++) {
    
    try {
      let res = await axios.get(
        `https://dog.ceo/api/breeds/image/random`
      );
      let randomBreedImage =  res.data.message;

    console.log(randomBreedImage, "randomBreedImage");
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

export default getRandomBreedImage;