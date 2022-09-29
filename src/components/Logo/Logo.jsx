import { LogoWrapper, LogoIcon, LogoTxt } from "./Logo.styled"
import Media from 'react-media';

export const Logo = () => {



    return (
        <LogoWrapper className="logo">
            <LogoIcon className="logo__icon"/>
            <Media query="(min-width: 768px)" render={() =>
                (
                    <LogoTxt className="logo__text"/>
                )}
            />
            
        </LogoWrapper>
    )
}