import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { signin } from '../../services/api'

import Modal from '../modal'

const List = styled.ul``

const DataItem = styled.li``

type DataItemType = {
  field: string,
  value: string | JSX.Element
  id: number
}

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

interface IDataModel {
  data: Data[]
  onClose:() => void
}


const DataModal = ({ data, onClose }: IDataModel) => {
  const [fields, setFields] = useState<any>({ fields: {} })

  const items = Object.keys(fields)
  console.log('items: ', items)
  
  useEffect(() => {
    const handleResult = async () => {
      const result = await signin()
      
      const fields = result?.data?.data?.metadata?.objectclass.fields
      console.log('fields: ', fields)
      setFields(fields)
    }

    handleResult()

  },[])

  return(
    <Modal title="Dados do formulario" onClose={onClose} data-testid="data-modal">
      <List>
        {items?.map((item) => {
      const fieldsNames = fields[item]

      return(
        <DataItem key={fieldsNames.uuid}>
          <p><strong>{fieldsNames?.display_text?.des}:</strong>{}</p>
        </DataItem>
      )
    })}
      </List>
    </Modal>
  )
}

export default DataModal
