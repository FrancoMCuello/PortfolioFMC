import BtnArrow from "./BtnArrow";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
function Contact() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const navSkills = () => {
    navigate("/skills");
  };

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí podrías hacer un fetch o axios para enviar los datos
  };

  return (
    <>
      <StyledUp>
        <Nav />
      </StyledUp>

      <StyledContainerG>
        <StyledBotonN>
          <BtnArrow onClick={navSkills} />
        </StyledBotonN>
        <StyledContainerF>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 500,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" align="center" color="white">
              Contactanos
            </Typography>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Mensaje"
              name="mensaje"
              multiline
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Box>
        </StyledContainerF>
      </StyledContainerG>
      <footer>
        <p>Franco Matias Cuello | © Argentina Programa 2022</p>
        <p>Cordoba, Argentina</p>
      </footer>
    </>
  );
}

const StyledContainerG = styled.div`
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

const StyledContainerF = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  min-height: 80vh;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
`;

const StyledBotonN = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

export default Contact;
