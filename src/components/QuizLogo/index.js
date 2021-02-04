import styled from "styled-components";

import React from "react";
import PropTypes from "prop-types";

function Logo({ className }) {
  return (
    <img
      className={className}
      src="https://upload.wikimedia.org/wikipedia/pt/0/0c/The_Lord_of_the_Rings_logo.png"
      alt="Lotr logo"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  width: 22rem;
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 15rem;
    margin: auto;
  }
`;

export default QuizLogo;
