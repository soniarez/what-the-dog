import axios from "axios";

// FETCH ALL DOG IMAGES
const getBreedImages = async (breedName) => {
    try {
      let res = await axios.get(`https://dog.ceo/api/breed/${breedName}/images`);
      let breedsImageObject = await res.data;
      console.log(breedsImageObject, "breeds Obj Images")
      return breedsImageObject;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };
  
  export default getBreedImages;