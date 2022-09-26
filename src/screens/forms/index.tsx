import React, { useState } from "react";

import Input from "../../components/Input/index.tsx";
import Button from "../../components/Button/index.tsx";
import Modal from "../modal/index.tsx";
import "./styles.css"

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
          <div><h2>React-forms</h2></div>
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
          {/* TODO: adicionar a variacao de link button no componente de button */}
          <a href="#abrirModal"><Button variant="send">Enviar</Button></a>
        </WrapperButtons>
      </Box>
      <div className="modal" id="abrirModal">
        <Modal />
      </div>
    </Container>
    </>
  );
}

export default Forms;
