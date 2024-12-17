import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Formacion() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const navSkills = () => {
    navigate("/skills");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Formacion dev</h1>
      <StyledContainerG>
        <button onClick={navHome}>Regresar</button>
        <StyledContainerF>
          <div className="containerF">
            <img
              src="https://filmnoir.pythonanywhere.com/static/img/logo-CAC-2.webp"
              alt=""
            />
            <h3 className="activateF">
              Aca se agregaria la informacion extendida
            </h3>
          </div>
          <div className="containerF">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoHMf7EFEC2MgIyuwkt3vuyq30PcKvuqu3g&s"
              alt=""
            />
            <h3 className="activateF">
              Aca se agregaria la informacion extendida
            </h3>
          </div>
          <div className="containerF">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-a2b3iLw0VXbLlgYm6wUcaZ07SMFvddObwR1o9fo37IKyFHufGTSoWHTkJztXTfTf0jk&usqp=CAU"
              alt=""
            />
            <h3 className="activateF">
              Aca se agregaria la informacion extendida
            </h3>
          </div>
        </StyledContainerF>
        <button onClick={navSkills}>Seguir</button>
      </StyledContainerG>
    </>
  );
}

const StyledContainerG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
`;

const StyledContainerF = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 15em;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;

  .containerF {
    position: relative;
    border: 1px solid white;
    margin: 0.5em;
    width: 20em;
    height: 10em;
    overflow: hidden;
    transition: height 0.3s ease;
    margin-bottom: 0;
    background-color: black;

    &:hover {
      height: 20em;
    }

    img {
      width: 20em;
      height: 10em;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1); /* La imagen se agranda ligeramente */
      }
    }

    .activateF {
      opacity: 0;
      position: absolute;
      up: 0;
      left: 0;
      right: 0;
      padding: 0.5em;
      margin: 0;
      background-color: black;
      color: white;
      text-align: center;
      transition: opacity 0.3s ease;
      height: 10em;
    }

    &:hover .activateF {
      opacity: 1;
    }
  }
`;

export default Formacion;
