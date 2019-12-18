import React from 'react';
import renderer from 'react-test-renderer';
import BookingPrice from '../BookingPrice';

describe('Booking price component', () => {
  it('should renders correctly', () => {
    const Component = <BookingPrice amount={256} currency="PLN" />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly with default props', () => {
    const Component = <BookingPrice amount={256} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
