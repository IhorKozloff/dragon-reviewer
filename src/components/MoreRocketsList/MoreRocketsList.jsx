import { RocketsList, RocketsListItem, RocketImage, RocketLink, RocketDescription, RocketDescriptionName, RocketDescriptionStatsList} from "./MoreRocketsList.styled";
import { useSelector } from "react-redux";
import { FavoritesButton } from "components";

export const MoreRocketsList = () => {

    const {moreRocketsData} = useSelector((state) => state.otherData);
    const {favIds} = useSelector((state) => state.favorites)

    return (
            <RocketsList className="more-rockets__wrapper rockets-list">
                {moreRocketsData.length !== 0 && moreRocketsData.map(({id, flickr_images: imageLink, height_w_trunk: height, dry_mass_kg: mass, first_flight: year, name}) => {
                    
                    return (
                        <RocketsListItem key={id} className="rockets-list__item item">
                            <RocketLink to={`/more/${id}`} onClick={() => {
                                   window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                  });
                            }}>
                                <RocketImage className="item__image" src={imageLink} alt="space rocket"/>

                                <RocketDescription className="item__description description">
                                    <RocketDescriptionName className="description__name">{name}</RocketDescriptionName>
                                    <RocketDescriptionStatsList>
                                        <li>
                                            Height:{height.meters}m.
                                        </li>
                                        <li>
                                            Mass: {mass}kg.
                                        </li>
                                        <li>
                                            Year: {year.slice(0, 4)}
                                        </li>
                                    
                                    </RocketDescriptionStatsList>
                                   
                                </RocketDescription>
                            </RocketLink>
                           
                            
                            <FavoritesButton itemId={id} favStatus={favIds.includes(id)}/>

                        </RocketsListItem>
                    )
                })}
            </RocketsList>
    )
}