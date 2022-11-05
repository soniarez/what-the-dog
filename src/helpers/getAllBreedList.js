import axios from "axios";

//FETCHING DOG DATA FROM API
const getAllBreedList = async () => {
    try {
      let res = await axios.get("https://dog.ceo/api/breeds/list/all");
      let breedsObject = await res.data;
      return breedsObject;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
  };

  export default getAllBreedList;


