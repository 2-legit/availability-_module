import Enzyme from 'enzyme';
import Sinon from 'sinon';
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

describe('Check if all components exist', () => {
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

describe('<Rating />', () => {
  it('expects rating to be 0 stars when given a rating of 0', () => {
    const wrap = Enzyme.shallow(<Rating rating={0}/>);
    expect(wrap.containsMatchingElement(
      <span className="star">☆☆☆☆☆</span>
      )
    ).toBeTruthy()
  })
  it('expects rating to be 1 stars when given a rating of 1', () => {
    const wrap = Enzyme.shallow(<Rating rating={1}/>);
    expect(wrap.containsMatchingElement(
      <span className="star">★☆☆☆☆</span>
      )
    ).toBeTruthy()
  })
  it('expects rating to be 2 stars when given a rating of 2', () => {
    const wrap = Enzyme.shallow(<Rating rating={2}/>);
    expect(wrap.containsMatchingElement(
      <span className="star">★★☆☆☆</span>
      )
    ).toBeTruthy()
  })
  it('expects rating to be 3 stars when given a rating of 3', () => {
    const wrap = Enzyme.shallow(<Rating rating={3}/>);
    expect(wrap.containsMatchingElement(
      <span className="star">★★★☆☆</span>
      )
    ).toBeTruthy()
  })
  it('expects rating to be 4 stars when given a rating of 4', () => {
    const wrap = Enzyme.shallow(<Rating rating={4}/>);
    expect(wrap.containsMatchingElement(
      <span className="star">★★★★☆</span>
      )
    ).toBeTruthy()
  })
  it('expects rating to be 5 stars when given a rating of 5', () => {
    const wrap = Enzyme.shallow(<Rating rating={5}/>);
    expect(wrap.containsMatchingElement(
      <span className="star">★★★★★</span>
      )
    ).toBeTruthy()
  })
})

describe('<AllListings />', () => {
  it('something happens when button is clicked on', () => {
    const onLeftClick = Sinon.spy()
    const wrap = Enzyme.shallow(<AllListings />);
    wrap.find("button").simulate('click', onLeftClick);
    expect(onLeftClick.called).toEqual(true);
  })
})

