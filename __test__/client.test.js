import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('should have access to DOM', () => {
  expect(typeof document).toBe('object');
});
