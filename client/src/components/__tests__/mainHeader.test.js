import React from 'react';
import MainHeader from '../MainHeader';
import {shallow} from 'enzyme';
import {NavLink} from 'react-router-dom';

describe('<MainHeader /> component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<MainHeader />)
  })
  
  it('render without chashing', () => {
    expect(wrapper).toBeTruthy();
  })
  
  it('render 2 NavLinks', () => {
    expect(wrapper.find(NavLink)).toHaveLength(2);
  })

})