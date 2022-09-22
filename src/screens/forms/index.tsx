import React, { useState } from "react";

import Input from "../../components/Input/index.tsx";
import Button from "../../components/Button/index.tsx";
import Modal from "../modal/index.tsx";

import { Container, Wrapper, Box, WrapperButtons, TextWrapper } from "./styles.tsx";

import { mockDataInfos } from "./mocks.ts";
import useLocalstorage from "../../hooks/useLocalstorage.tsx";

const Forms = () => {
const [modal, setModal] = useState(false);
const [text, setText] = useLocalstorage("name", "initialValue")

  const handleModal = () => {
    setModal(true);
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
                    key={item.id}
                    type="text"
                    name="textInput"
                    onchange={(e) => setText(e.target.value)}
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
