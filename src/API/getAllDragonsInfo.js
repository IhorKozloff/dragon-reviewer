import axios from "axios";

export const getAllDragonInform = async () => {
    const { data } = await axios.get("https://api.spacexdata.com/v4/dragons");
    return data;
};