import React, { useState } from "react";

import Input from "../../components/Input/index.tsx";
import Button from "../../components/Button/index.tsx";
import Modal from "../modal/index.tsx";
import "./styles.css"

import { Container, Wrapper, Box, WrapperButtons, TextWrapper } from "./styles.tsx";


const Forms = () => {
  const [name, setName] = useState("name")
  const [lastName, setLastName] = useState("lastName")
  const [email, setEmail] = useState("email")
  const [location, setLocation] = useState("location")
  const [note, setNote] = useState("note")

  const handleName = (e) => {
    e.preventDefault()

    setName(e.target.value)
  }

  const handleLastName = (e) => {
    e.preventDefault()

    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    e.preventDefault()

    setEmail(e.target.value)
  }

  const handleLocation = (e) => {
    e.preventDefault()

    setLocation(e.target.value)
  }

  const handleNote = (e) => {
    e.preventDefault()

    setNote(e.target.value)
  }

  return (
    <>
    <Container>
      <Box>
        <div><h2>React-forms</h2></div>
        <Wrapper>
          <TextWrapper>Name</TextWrapper>
          <Input
            type="text"
            name="textInput"
            onchange={handleName}
          />
        </Wrapper>

        <Wrapper>
          <TextWrapper>Sobrenome</TextWrapper>
          <Input
            type="text"
            name="textInput"
            onchange={handleLastName}
          />
        </Wrapper>

        <Wrapper>
          <TextWrapper>E-mail</TextWrapper>
          <Input
            type="text"
            name="textInput"
            onchange={handleEmail}
          />
        </Wrapper>

        <Wrapper>
          <TextWrapper>Estado</TextWrapper>
          <Input
            type="text"
            name="textInput"
            onchange={handleLocation}
          />
        </Wrapper>

        <Wrapper>
          <TextWrapper>observação</TextWrapper>
          <Input
            type="text"
            name="textInput"
            onchange={handleNote}
          />
        </Wrapper>
        
        <WrapperButtons>
          <Button variant="reset">Limpar</Button>
          {/* TODO: adicionar a variacao de link button no componente de button */}
          <a href="#abrirModal"><Button variant="send">Enviar</Button></a>
        </WrapperButtons>
      </Box>
      <div className="modal" id="abrirModal">
        <Modal name={name} lastName={lastName} email={email} region={location} note={note}/>
      </div>
    </Container>
    </>
  );
}

export default Forms;
