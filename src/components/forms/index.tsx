import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import DataModal from "../data-modal";
import Select from "../Select";

import { singin } from "../../services/api";

import { Container, Wrapper, Box, Form, WrapperButtons } from "./styles";
import Text from "../Text";

type Data = {
  id: number,
  field: string,
  value: string
}

type FormType = {
  defaultData: Data[]
}

const Forms = ({ defaultData }: FormType) => {
  const [data, setData] = useState<Data[]>(defaultData)
  const [isOpen, setIsOpen] = useState(false)

  const handleData = (field: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    setData(data.map(item => {
      if (item.field === field) return { ...item, value: event.target.value }
      return item
    }))
  }

  const handleModalOpen = () => {
    setIsOpen(!isOpen)
  }

  const onSubmit = async () => {
    const res = await singin()
    console.log('res', res)
  }
  
  return (
    <>
      <Container>
        <Box>
          <Form name="container">
            {data?.map((item) => {
              return (
                <Wrapper key={item.id}>
                  <Text name={`input-name-${item.id}`}>{item.field}</Text>
                  {item.field === 'Region' ? <Select /> : <Input onChange={event => handleData(item.field, event)} id={`input-name-${item.id}`} />}
                </Wrapper>
              )
            }
            )}

            <WrapperButtons>
              <Button type="button" variant="reset">Limpar</Button>
              <Button type="button" variant="send" onClick={handleModalOpen} className="button-class">Enviar</Button>
            </WrapperButtons>
          </Form>
        </Box>
        {isOpen && (
          <DataModal data={data} onClose={handleModalOpen} />
        )}
      </Container>
    </>
  );
}

export default Forms;
