import styled from 'styled-components'

import Modal from '../modal'

const List = styled.ul``

const DataItem = styled.li``

type DataItemType = {
  field: string,
  value: string | JSX.Element
  id: number
}

interface IDataModel {
  data: DataItemType[]
  onClose:() => void
}

const DataModal = ({ data, onClose }: IDataModel) => {
  console.log('data-modal: ', data)
  return(
    <Modal title="Dados do formulario" onClose={onClose}>
      <List>
        {data?.map((item) => {
          return(
            <DataItem key={item.id}>
              <p><strong>{item.field}:</strong> {item.value}</p>
            </DataItem>
          )
        }
        )}
      </List>
    </Modal>
  )
}

export default DataModal
