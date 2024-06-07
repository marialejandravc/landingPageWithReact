import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, text, buttonText }) => {
    return (
      <div className="card mt-5" style={{ width: '18rem' }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    );
  };
  
  Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };
  
  export default Card;