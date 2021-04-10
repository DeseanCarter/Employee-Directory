import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

let apiFunc = {
  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  employeeSearch: function() {
    return axios.get("https://randomuser.me/api/?results=15&nat=dk");
  }
};

export default apiFunc