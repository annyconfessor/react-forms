import React, { useState } from "react";

import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import Modal from "../modal/Modal.tsx";

import { Container, Wrapper, Box, WrapperButtons, TextWrapper } from "./styles.tsx";

import { mockDataInfos } from "./mocks.ts";

const Forms = () => {
const [modal, setModal] = useState(false);
const [value, setValue] = useState(``);

  const handleModal = () => {
    setModal(true);
  }

  const handleValue = (e) => {
    const event = e.target.value
    setValue(event)
  }

  return (
    <>
    <Container>
      <Box>
          {mockDataInfos.map((item) => (
            <>
              <Wrapper key={item.id}>
                <TextWrapper>{item.field}</TextWrapper>
                  <Input 
                    type="text"
                    name="textInput"
                    value={value} 
                    onchange={handleValue}
                  />
              </Wrapper>
            </>
          ))}
        <WrapperButtons>
          <Button variant="reset">Limpar</Button>
          <Button variant="send" href="abrir-modal" onClick={handleModal}>Enviar</Button>
        </WrapperButtons>
      </Box>
      {modal && <Modal />}
    </Container>
    </>
  );
}

export default Forms;
