import BtnArrow from "./BtnArrow";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
function Contact() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const navSkills = () => {
    navigate("/skills");
  };
  return (
    <>
      <StyledUp>
        <Nav />
      </StyledUp>
      <BtnArrow onClick={navSkills} />
      <StyledContainerP></StyledContainerP>
      <footer>
        <p>Franco Matias Cuello | © Argentina Programa 2022</p>
        <p>Cordoba, Argentina</p>
      </footer>
    </>
  );
}

const StyledContainerP = styled.div`
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
`;

const StyledUp = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  z-index: 1;
  width: 100%;
  height: 4em;
`;

export default Contact;
