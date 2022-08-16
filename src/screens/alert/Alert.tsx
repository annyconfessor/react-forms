import React from "react";

import { Container, Box, WrapperTexts } from "./styles.tsx";

import { mockAlertInfos } from "./mocks.ts";

const Forms = () => {
  return (
    <Container>
      <Box>
      <h3>Alert</h3>
        {mockAlertInfos.map((item) => (<><WrapperTexts key={item.id}><h3>{item.title}</h3>{item.field}</WrapperTexts></>))}
      </Box>
    </Container>
  );
}

export default Forms;
