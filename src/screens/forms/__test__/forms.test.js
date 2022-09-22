import renderer from 'react-test-renderer'
import Forms from '../Forms'

it('should render corectly', () => {
  const matchRender = renderer.create(<Forms />).toJSON()
  expect(matchRender).toMatchSnapshot()
})