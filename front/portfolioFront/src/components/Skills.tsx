import styled from "styled-components";
import Stack from "@mui/material/Stack";
import MuiSlider from "@mui/material/Slider";
function Skills() {
  return (
    <StyledContainerG>
      <h1>Skills</h1>
      <StyledContainerSkills>
        <div className="skillsH">
          <h3>Skills Hard</h3>
          <Stack sx={{ height: 300 }} spacing={1} direction="row">
            <StyledSlider
              orientation="vertical"
              /* aria-label="Always visible" */
              /*  valueLabelDisplay="on" */
              defaultValue={0}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Stack>
        </div>
        <div className="skillsH">
          <h3>Skills Blandas</h3>
        </div>
      </StyledContainerSkills>
    </StyledContainerG>
  );
}

const StyledContainerG = styled.div`
  display: flex;
  min-height: 80vh;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledContainerSkills = styled.div`
  display: flex;
  width: 90%;
  min-height: 80vh;
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
  color: "#3a8589";
  & .MuiSlider-thumb {
    display: none;
  }
`;

export default Skills;
