import { FavoriteListWrapper, DesctopPlug, FavoriteListItem, FavoriteLink, FavoriteImage, FavoriteDescription, FavoriteDescriptionName, FavoriteDescriptionStatsList, RemoveButton} from "./FavoriteList.styled";
import { MdDeleteForever } from "react-icons/md"
import { TbArrowAutofitHeight } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { addOrRemoveFavorites } from "redux/favoritesSlice";

export const FavoriteList = ({data = []}) => {
    const dispatch = useDispatch();

    const onRemoveButtonClick = (event) => {
        console.log(event.target.dataset.itemid);
        const removeID = event.target.dataset.itemid;
        dispatch(addOrRemoveFavorites(removeID));
    }


    return (
        <>
        <FavoriteListWrapper>
            {data.length !== 0 && data.map(({id, flickr_images: imageLink, height_w_trunk: height, dry_mass_kg: mass, first_flight: year, name}) => {
                    return (
                        <FavoriteListItem key={id} className="rockets-list__item item">
                            <FavoriteLink to={`/more/${id}`}>

                                <div className="thumb">
                                    <FavoriteImage className="item__image" src={imageLink} alt="space rocket"/>
                                </div>
                                

                                <FavoriteDescription className="item__description description">
                                    <FavoriteDescriptionName className="description__name">{name}</FavoriteDescriptionName>
                                    <FavoriteDescriptionStatsList>
                                        <li>
                                            <TbArrowAutofitHeight className="stat-icon"/>
                                            <span className="stat-title">Height:</span>
                                            <span className="stat-value">{height.meters}</span>
                                            <span className="stat-inch">m.</span>
                                        </li>
                                        <li>
                                            <GiWeight className="stat-icon"/>
                                           <span className="stat-title">Mass:</span>  
                                           <span className="stat-value">{mass}</span>
                                           <span className="stat-inch">kg.</span>
                                        </li>
                                        <li>
                                            <FcCalendar className="stat-icon"/>
                                            <span className="stat-title">Year:</span>
                                            <span className="stat-value">{year.slice(0, 4)}</span> 
                                        </li>
                                    
                                    </FavoriteDescriptionStatsList>
                                   
                                </FavoriteDescription>
                                
                            </FavoriteLink>
                            <RemoveButton type="button" data-itemid = {`${id}`} onClick={(e) => {
                                    onRemoveButtonClick(e)
                                }}>
                                    <MdDeleteForever/>
                            </RemoveButton>
                        </FavoriteListItem>
                    )
                })
            }
            
        </FavoriteListWrapper>

        {data.length === 0 && <DesctopPlug><span>There is nothing in</span><span> favorites yet.</span></DesctopPlug>}
        </>
    )
}