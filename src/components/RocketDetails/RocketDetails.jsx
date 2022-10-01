import { Loader } from "components"
import { RocketDetailsWrapper, RocketNameWraprer, RocketDescriptionTextWrapper, RocketWikiLink, StatsTittle, TittleWrapper, ValueWrapper, StatsList } from "./RocketDetails.styled";
import { Carousel } from "react-bootstrap";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc"

export const RocketDetails = ({loaderStatus = false, dataToRender}) => {
    console.log(dataToRender)
    

    const { flickr_images, name, description, wikipedia, height_w_trunk:height, dry_mass_kg:mass, first_flight:year } = dataToRender;

    return (
        <>
            {loaderStatus &&

                <Loader/>
                
            }
            
            {dataToRender.length !== 0 && 
            
            <RocketDetailsWrapper className="rocket-details__wrapper">
                    
                <Carousel variant="dark" style={{width: "100%"}}>
                    {flickr_images.map(item => {

                            return (
                                
                                <Carousel.Item  key={item} interval={1500} style={{'height': '400px'}}>
                                    <img 
                                        src={item} 
                                        alt="space rocket" 
                                        className="d-block w-100 h-100"
                                        style={{objectFit: "cover"}}
                                    />
                                </Carousel.Item>    
                            )
                        })
                    }
                
                </Carousel>

                <RocketNameWraprer>
                    <h3>{name}</h3>
                </RocketNameWraprer>

                <RocketDescriptionTextWrapper>
                    <p>{description}</p>
                </RocketDescriptionTextWrapper>
                <RocketWikiLink href={wikipedia} target="_blank">visit the original source for more advanced information</RocketWikiLink>
                

                <StatsTittle>Main parameters and technical characteristics</StatsTittle>


                <StatsList>
                    <li>
                        <TittleWrapper>
                            <TbArrowAutofitHeight className="stat-icon"/>
                            <span className="stat-title">Height</span>
                        </TittleWrapper>
                        <ValueWrapper>
                            <span className="stat-value">{height.meters}</span>
                            <span className="stat-inch">m.</span>
                        </ValueWrapper>
                        
                    </li>
                    <li>
                        <TittleWrapper>
                            <GiWeight className="stat-icon"/>
                            <span className="stat-title">Mass</span>
                        </TittleWrapper>
                          
                        
                        <ValueWrapper>
                            <span className="stat-value">{mass}</span>
                            <span className="stat-inch">kg.</span>
                        </ValueWrapper>
                    </li>
                    <li>
                        <TittleWrapper>
                            <FcCalendar className="stat-icon"/>
                            <span className="stat-title">Year</span>
                        </TittleWrapper>
                        
                        
                        <ValueWrapper>
                            <span className="stat-value">{year.slice(0, 4)}</span> 
                        </ValueWrapper>
                    </li>
                </StatsList>
                
                </RocketDetailsWrapper>
            }
        </>
       
    )
}
