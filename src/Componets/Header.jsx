import PropTypes from "prop-types";

function Header({ text }) {
  const headerStyles = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#73B668",
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
