import { Loader } from "components"
import { RocketDetailsWrapper } from "./RocketDetails.styled";
import { Carousel } from "react-bootstrap";


export const RocketDetails = ({loaderStatus = false, dataToRender}) => {

    

    const { flickr_images, name, description, wikipedia, height_w_trunk, dry_mass_kg, first_flight } = dataToRender;

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

                <p>{name}</p>
                <p>{description}</p>
                <a href={wikipedia}>{wikipedia}</a>
                <p>height: {height_w_trunk.meters} meters, mass: {dry_mass_kg}, year: {first_flight}</p>
                    
                </RocketDetailsWrapper>
            }
        </>
       
    )
}
