import { RocketDetails } from "components"
import { useSelector } from "react-redux";

export const MainRocketBar = () => {
    const data = useSelector((state) => state.mainData);


    return (
        <RocketDetails 
            loaderStatus={data.isLoading === true && localStorage.getItem('persist:mainRocketData') === null}
            dataToRender={data.mainRocketData}
        />
    )
}