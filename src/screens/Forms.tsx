import React from "react";

import Input from './../components/Input/index.tsx'

import { Container, Wrapper } from "./styles.tsx";

import { mockDataInfos } from "./mocks.ts";

const Forms = () => {
  return (
    <Container>
      {mockDataInfos.map((item) => (<><Wrapper key={item.id}>{item.field}<Input /></Wrapper></>))}
    </Container>
  );
}

export default Forms;
