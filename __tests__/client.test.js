import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/Components/App';

Enzyme.configure({ adapter: new Adapter() });

test('should have access to DOM', () => {
  expect(typeof document).toBe('object');
});

describe('<App /> ', () => {
  it('expects App component to exist', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.exists()).toBe(true)
  })
})
