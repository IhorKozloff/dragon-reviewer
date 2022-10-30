import axios from "axios";

export const getUserData = async (email) => {
    try {
        const { data } = await axios.get(`https://eyeshield-wallet-server-app.herokuapp.com/dragon/get?email=${email}`);
    
        console.log(data)
        return data.result
    } catch (err) {
        console.log(err)
    }
}