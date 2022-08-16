import React, { useState } from "react";

import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import Alert from "../alert/Alert.tsx";

import { Container, Wrapper, Box, WrapperButtons, TextWrapper } from "./styles.tsx";

import { mockDataInfos } from "./mocks.ts";

const Forms = () => {
const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  }

  return (
    <>
    <Container>
      <Box>
          {mockDataInfos.map((item) => (<><Wrapper key={item.id}><TextWrapper>{item.field}</TextWrapper><Input /></Wrapper></>))}
        <WrapperButtons>
          <Button>Reset</Button>
          <Button variant="send" href="abrir-modal" onPress={!modal && handleModal}>Enviar</Button>
          {modal === true && <Alert />}
        </WrapperButtons>
      </Box>
    </Container>
    </>
  );
}

export default Forms;
