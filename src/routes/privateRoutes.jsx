import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export default function PrivateRoute({ children }) {

    const { isAuth } = useAuth();

    return <>{isAuth === true ? children : <Navigate to="/login"/>}</>
};