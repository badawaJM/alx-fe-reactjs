// src/components/UserProfile.jsx
import PropTypes from 'prop-types';

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

// Define the prop types for the component
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 'age' can be a string or number and is required
  bio: PropTypes.string.isRequired, // 'bio' must be a string and is required
};

export default UserProfile;
