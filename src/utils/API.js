import axios from "axios";

let apiData = {
  employeeSearch: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=dk");
  }
};

export default apiData;