import { Navigate } from "react-router-dom";
import { Routing } from "./routing";

interface ProtectedRouteProps {
    element: React.ReactNode;
  }
  
const ProtectedRoute = ({ element} : ProtectedRouteProps) => {
    // const isAuthenticated = localStorage.getItem('isAuthenticated') !== null
    const isAuthenticated = true
    return (
        isAuthenticated ?
            element
            :
            <Navigate to={Routing.Login} />
    )
};

export default ProtectedRoute;