import React from "react";

import { Container, Content } from "./styles";

import Button from "./../../components/Button"

export type ModalProps = {
  title?: string,
  children: React.ReactElement,
  onClose?: () => void
}

const Modal = ({ title, children, onClose, ...props }: ModalProps) => {
  const handleClose = () => {
    onClose && onClose()
  }
  return (
    <Container {...props}>
      <Content>
        {title ? <h3>{title}</h3> : null}
        {children}
        <Button variant="send" onClick={handleClose}>Fechar</Button>
      </Content>
    </Container>
  );
}

export default Modal
