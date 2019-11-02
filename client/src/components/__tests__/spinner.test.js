import React from 'react';
import {shallow, mount} from 'enzyme';
import CircularProgress from '@material-ui/core/CircularProgress';
import Spinner from '../Spinner';

describe('<Spinner /> component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });
  afterEach(() => {
    wrapper = null;
  });

  test('render without chashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('render Material-UI <CircularProgress/>', () => {
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });

  test('get correct props length', () => {
    wrapper = mount(<Spinner color="red" bgColor="black" />);
  });

  test('get correct props values', () => {
    const wrapper = mount(<Spinner color="red" bgColor="black" />);
    expect(wrapper.props().color).toBe('red');
    expect(wrapper.props().bgColor).toBe('black');
  });
});
