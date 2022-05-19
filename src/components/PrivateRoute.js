import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useAuth();

  function useAuth() {
    let currentUser = localStorage.getItem("user");

    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }

  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
