// ProtectedRoute.js
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from '../../store/authSlice';

const ProtectedRoute = ({ children }) => {
    const token = useSelector(selectToken) || localStorage.getItem('token');

    if (!token) {
        // Redirect to login page if no token is found
        return <Navigate to="/login" />;
    }

    // Ensure `children` is rendered correctly
    return <>{children}</>;
};

export default ProtectedRoute;





// // ProtectedRoute.js
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectToken } from '../../store/authSlice';

// const ProtectedRoute = (children) => {
//     const token = useSelector(selectToken) || localStorage.getItem('token');

//     if (!token) {
//         // Redirect to login page if no token is found
//         return <Navigate to="/login" />;
//     }

//     return children;
// };

// export default ProtectedRoute;
