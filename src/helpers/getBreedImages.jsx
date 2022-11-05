import axios from "axios";

// FETCH ALL DOG IMAGES
const getBreedImages = async (breedName) => {
    try {
      let res = await axios.get(`https://dog.ceo/api/breed/${breedName}/images`);
      let breedsObject = await res.data;
      console.log(breedsObject, "breeds Obj Images")
      return breedsObject;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };
  
  export default getBreedImages;