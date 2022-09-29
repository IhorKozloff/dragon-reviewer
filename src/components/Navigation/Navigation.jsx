import { NavigationWrapper, NavigationLink, AuthWrapper } from "./Navigation.styled";
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {

    const {isAuth} = useAuth();

    return (
        <NavigationWrapper className="navigation">
            <NavigationLink to="/" className="navigation__link">Home</NavigationLink>

            {isAuth === false && 
            <AuthWrapper>
                <NavigationLink to="/login" className="navigation__link">Login</NavigationLink>
                <NavigationLink to="/register" className="navigation__link">Register</NavigationLink>
            </AuthWrapper>}
            
        </NavigationWrapper>
    )
}