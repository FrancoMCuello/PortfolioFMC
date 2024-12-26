import styled from "styled-components";
import Stack from "@mui/material/Stack";
import MuiSlider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import BtnArrow from "./BtnArrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

function Skills() {
  const navigate = useNavigate();
  const navForm = () => {
    navigate("/formacion");
  };
  const navContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Skills</h1>
      <StyledContainerG>
        <BtnArrow onClick={navForm} />
        <StyledContainerSkills>
          <div className="skillsH">
            <h3>Skills Hard</h3>
            <Stack sx={{ height: 300 }} spacing={1} padding={2} direction="row">
              <StyledSlider
                orientation="vertical"
                /* aria-label="Always visible" */
                /*  valueLabelDisplay="on" */
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Stack>
            <h4>Logo Skill</h4>
          </div>
          <div className="skillsH">
            <h3>Skills Blandas</h3>
            <Stack sx={{ height: 300 }} spacing={1} padding={2} direction="row">
              <StyledSlider
                orientation="vertical"
                /* aria-label="Always visible" */
                /*  valueLabelDisplay="on" */
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Stack>
            <h4>Logo Skill</h4>
          </div>
        </StyledContainerSkills>
        <BtnArrow
          onClick={navContact}
          icon={
            <ArrowBackIosIcon
              sx={{ fontSize: 60, transform: "rotate(180deg)" }}
            />
          }
        />
      </StyledContainerG>
    </>
  );
}

const StyledContainerG = styled.div`
  display: flex;
  min-height: 80vh;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledContainerSkills = styled.div`
  display: flex;
  width: 90%;
  min-height: 80vh;
  padding: 0.5em;
  color: white;
  justify-content: center;
  align-items: center;

  .skillsH {
    display: flex;
    width: 50%;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledSlider = styled(MuiSlider)`
  & .MuiSlider-thumb {
    display: none;
  }
`;

export default Skills;
