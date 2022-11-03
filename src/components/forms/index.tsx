import { useEffect, useState } from "react";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

import { signin } from "../../services/api";

import { Container, Wrapper, Box, Form, WrapperButtons } from "./styles";
import Text from "../Text";
import TextBox from "../TextBox";
import DataModal from "../data-modal";

type Data = {
  uuidobjectclass: string,
  uuid: string,
  des: string,
  complement: string,
  fields: {
    firstname: {
      uuid: string,
      coumnjson: string,
      type: string,
      displaytext: {
        des: string
      }
      readonly: boolean
    }
  }
}

const Forms = () => {
  const [dataa, setData] = useState<any>({ fields: {} })
  const [isOpen, setIsOpen] = useState(false)

  const items = Object.keys(dataa.fields)

  const handleModalOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResult = async () => {
      const result = await signin()
      
      const res = result?.data?.data?.metadata?.objectclass
      setData(res)
    }
    
    handleResult()
    
  }, [])

  const renderFields = () =>
    items?.map((item) => {
      const data = dataa.fields[item]

      return (
        <Wrapper key={data.uuid}>
          <Text>{data?.display_text?.des}</Text>
          {data.type === 'SELECT' ? <Select /> : <Input onChange={e => console.log(e)} id={`input-name-${data.uuid}`} />}
        </Wrapper>
      )
    })

  return (
    <>
      <Container>
        <Box>
          <Form name="container">
          <TextBox />
            {renderFields()}

            <WrapperButtons>
              <Button type="button" variant="reset">Limpar</Button>
              <Button type="button" variant="send" onClick={handleModalOpen} className="button-class">Enviar</Button>
            </WrapperButtons>
          </Form>
        </Box>
        {isOpen && (
          <DataModal data={dataa} onClose={handleModalOpen}/>
        )}
      </Container>
    </>
  );
}

export default Forms;
