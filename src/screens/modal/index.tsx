import React from "react";

import { Container, Box, WrapperTexts } from "./styles.tsx";

import Button from "./../../components/Button/index.tsx"

type ModalProps = {
  name: string,
  lastName: string,
  email: string,
  region: string,
  note?: string,
}

const Modal = ({ name, lastName, email, region, note }: ModalProps) => {

  return (
    <Container>
      <Box>
        <h3>Alert</h3>
        <WrapperTexts>
          <h3>Nome</h3>
          <p>{name}</p>
        </WrapperTexts>

        <WrapperTexts>
          <h3>Sobrenome</h3>
          <p>{lastName}</p>
        </WrapperTexts>

        <WrapperTexts>
          <h3>Email</h3>
          <p>{email}</p>
        </WrapperTexts>

        <WrapperTexts>
          <h3>Regiao</h3>
          <p>{region}</p>
        </WrapperTexts>

        <WrapperTexts>
          <h3>Observacao</h3>
          <p>{note}</p>
        </WrapperTexts>
        <a href="closeModal"><Button variant="send">Fechar</Button></a>
      </Box>
    </Container>
  );
}

export default Modal;
