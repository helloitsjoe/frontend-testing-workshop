import PropTypes from "prop-types";

export const usersShape = PropTypes.objectOf(
  PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
);
