import Forms from './components/forms'

const DEFAULT_DATA = [
  {
    id: 1,
    field: 'Name',
    value: ''
  },
  {
    id: 2,
    field: 'Last name',
    value: ''
  },
  {
    id: 3,
    field: 'Region',
    value: ''
  },
  {
    id: 4,
    field: 'Email',
    value: ''
  },
  {
    id: 5,
    field: 'Note',
    value: ''
  }
]

const App = () => (
    <Forms defaultData={DEFAULT_DATA} />
)

export default App;
