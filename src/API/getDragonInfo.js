import axios from "axios";

export const getDragonInform = async () => {

    const { data } = await axios.get("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f");
    return data;
};