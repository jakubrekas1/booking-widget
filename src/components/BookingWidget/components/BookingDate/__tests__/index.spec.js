import React from 'react';
import renderer from 'react-test-renderer';
import BookingDate from '../BookingDateContainer';

describe('Booking date component', () => {
  it('should renders correctly', () => {
    const Component = <BookingDate />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
