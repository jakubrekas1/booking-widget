import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

describe('Input component', () => {
  it('should renders correctly', () => {
    const Component = <Input onClick={() => null} placeholder="Some placeholder..." value="2019/12/15" />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly with default props', () => {
    const Component = <Input onClick={() => null} />;
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
