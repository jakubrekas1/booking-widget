import React from 'react';
import renderer from 'react-test-renderer';
import BookingRate from '../BookingRateContainer';

describe('Booking rate component', () => {
  it('should renders correctly - rate 0', () => {
    const Component = <BookingRate rate={0} votes={0} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly with default props', () => {
    const Component = <BookingRate />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - rate 1', () => {
    const Component = <BookingRate rate={1} votes={20} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - rate 1.5', () => {
    const Component = <BookingRate rate={1.5} votes={25} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - rate 2', () => {
    const Component = <BookingRate rate={2} votes={50} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - rate 4.5', () => {
    const Component = <BookingRate rate={4.5} votes={50} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - rate 4.33', () => {
    const Component = <BookingRate rate={4.33} votes={50} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - rate 5, all stars are filled', () => {
    const Component = <BookingRate rate={5} votes={50} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
