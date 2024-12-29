import axios from "axios";
import Business from "../../types/businessType.ts";

const BASE_URL = "http://localhost:3000/api/v1/";

export const getBusinesses = async (): Promise<Business[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}businesses`);
    return data;
  } catch (err) {
    return [];
  }
};

export const deleteBusiness = async (id: string): Promise<void> => {
  try {
    console.log(id);

    // await axios.delete(`http://localhost:3000/api/v1/businesses/${id}`); //1
    await axios.delete(`${BASE_URL}businesses/${id}`); //2
  } catch (err) {
    console.error(err);

    alert("an error has accrued");
  }
};
