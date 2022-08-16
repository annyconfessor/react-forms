import React from "react";

import Input from "../components/Input/Input.tsx";

import { Container, Wrapper, Box, WrapperButtons, TextWrapper, ResetButton, SendButton } from "./styles.tsx";

import { mockDataInfos } from "./mocks.ts";

const Forms = () => {
  return (
    <>
    <Container>
      <Box>
          {mockDataInfos.map((item) => (<><Wrapper key={item.id}><TextWrapper>{item.field}</TextWrapper><Input /></Wrapper></>))}
        <WrapperButtons>
          <ResetButton>Limpar</ResetButton>
          <SendButton>Enviar</SendButton>
        </WrapperButtons>
      </Box>
    </Container>
    </>
  );
}

export default Forms;
