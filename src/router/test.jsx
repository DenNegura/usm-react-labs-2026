import { Navigate } from "react-router-dom";

export function Dashboard({ isAuth }) {
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <h1>Dashboard</h1>;
}



export function ProtectedRoute({ user, children }) {
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}


Dashboard()
ProtectedRoute()