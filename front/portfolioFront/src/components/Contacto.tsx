import BtnArrow from "./BtnArrow";
import { useNavigate } from "react-router-dom";
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
      <h1>Hola soy el contact</h1>
      <BtnArrow onClick={navSkills} />
    </>
  );
}

export default Contact;
