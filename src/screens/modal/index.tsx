import React, { useState } from "react";

import { Container, Box, WrapperTexts } from "./styles.tsx";

import Button from "./../../components/Button/index.tsx"

import { mockModalInfos } from "./mocks.ts";

type ModalProps = {
  name: string,
  lastName: string,
  email: string,
  region: string,
  text?: string,
}

const Modal = ({ name, lastName, email, region, text }: ModalProps) => {

  return (
    <Container>
      <Box>
      <h3>Alert</h3>
        {mockModalInfos.map((item) => (
          <>
            <WrapperTexts key={item.id}><h3>{item.title}</h3>{item.field}</WrapperTexts>
          </>
        ))}
        <a href="closeModal"><Button variant="send">Fechar</Button></a>
      </Box>
    </Container>
  );
}

export default Modal;
