import styled from "styled-components";

const Widget = styled.div`
  margin-bottom: 24px;
  margin-top: 24px;
  background-color: #251d18;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;
  font-family: "MedievalSharp";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  line-height: 1;

  p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1;
  }
  h1 {
    align-self: center;
  }
`;
Widget.Header = styled.header`
  font-family: "MedievalSharp";
  display: flex;
  justify-content: flex-start;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;
Widget.Content = styled.div`
  font-family: "MedievalSharp";
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Widget;
