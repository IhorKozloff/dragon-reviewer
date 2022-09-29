import { RocketDetails } from "components"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const OtherRocketBar = () => {
    const data = useSelector((state) => state.mainData);

    const { rocketId } = useParams();
    const {moreRocketsData} = useSelector((state) => state.otherData);
    const currentRocket = moreRocketsData.length !== 0 ? moreRocketsData.find(item => item.id === rocketId) : [];

    return (
        <RocketDetails 
            loaderStatus={data.isLoading === true && localStorage.getItem('persist:otherRocketsData') === null}
            dataToRender={currentRocket}
        />
    )
}