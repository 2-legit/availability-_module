import Enzyme from 'enzyme';
import React from 'react';
import App from '../src/Components/App';
import Listing from '../src/Components/Listing';
import Rating from '../src/Components/Rating';
import AllListings from '../src/Components/AllListings';

const dummy = {
  roomId: 111,
  imageUrl: "https://s3-us-west-1.amazonaws.com/relatedlistings/relatedListings/listing2.jpg",
  typeOfRoom: 'Yurt',
  location: 'Oakland',
  listingTitle: 'Cool Home Near Lake',
  price: 100,
  rating: 4,
 }

test('should have access to DOM', () => {
  expect(typeof document).toBe('object');
});

describe('Component functionality', () => {
  it('expects App component to exist', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.exists()).toBe(true)
  })
  it('expects Listing component to exist', () => {
    const wrapper = Enzyme.shallow(<Listing listing={dummy}/>);
    expect(wrapper.exists()).toBe(true);
  });
  it('expects Rating component to exist', () => {
    const wrapper = Enzyme.shallow(<Rating />);
    expect(wrapper.exists()).toBe(true);
  })
  it('expects AllListings component to exist', () => {
    const wrapper = Enzyme.shallow(<AllListings />);
    expect(wrapper.exists()).toBe(true);
  })
})

// describe('<Rating />', () => {
//   it('expects rating to be 5 stars', () => {
//     const wrap = Enzyme.shallow(<Rating rating={3}/>);
//     // expect(wrap.prop()).toEqual(5);
//     wrap.setProps({ name: 'Moe' })
//     expect(wrap.props('name')).toEqual('Moe')
//   })
// })

