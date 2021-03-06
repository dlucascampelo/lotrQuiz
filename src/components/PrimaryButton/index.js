import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #564532;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bolder;
  font-size: 17px;
  font-family: "MedievalSharp";
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #8a7669;
    color: #daa520;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "type", "button"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
