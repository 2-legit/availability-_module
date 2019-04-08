import Enzyme from 'enzyme';
import React from 'react';
import App from '../src/Components/App';
import Listing from '../src/Components/Listing';

test('should have access to DOM', () => {
  expect(typeof document).toBe('object');
});

describe(' Component functionality ', () => {
  it('expects App component to exist', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.exists()).toBe(true)
  })
  it('expects Listing component to exists', () => {
    const wrapper = Enzyme.shallow(<Listing />);
    expect(wrapper.exists()).toBe(true);
  });
})
