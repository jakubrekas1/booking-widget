import React from 'react';
import renderer from 'react-test-renderer';
import BookingButton from '../BookingButton';

describe('Booking button component', () => {
  const Component = <BookingButton onClick={() => null} />;
  it('should renders correctly', () => {
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
