import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/" />;
}

// Validation des props
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default ProtectedRoute;