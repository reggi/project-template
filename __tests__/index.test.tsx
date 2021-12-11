import {Index} from '../pages/index';
import React from 'react'
import renderer from 'react-test-renderer';

test('should render index page', () => {
    const index = renderer.create(<Index />)
    expect(index.toJSON()).toMatchSnapshot();
});