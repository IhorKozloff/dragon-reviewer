import axios from "axios";

export const saveUserData = async (data) => {
    
    try {
        const response = await axios.post("https://eyeshield-wallet-server-app.herokuapp.com/dragon/add", data);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
} 