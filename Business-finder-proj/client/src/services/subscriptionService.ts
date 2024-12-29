import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/businesses/";

export const addSub = async (businessID: string, userID: string) => {
  console.log(userID);

  if (userID) {
    try {
      await axios.post(`${BASE_URL}${businessID}/subscribe`, { userID });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        switch (err.response?.status) {
          case 400:
            alert("you are already added subscription to this business");
            break;
          case 401:
            alert("owner can not subscribe to his own business");
            break;
          case 404:
            alert("could not find business with this id!");
            break;
          default:
            alert("server error");
        }
      } else {
        console.error(err);
        alert("an error had accrued");
      }
    }
  } else {
    alert(
      "you are first need to be logged in order to add subscription to a business"
    );
  }
};

export const removeSub = async (businessID: string) => {};
