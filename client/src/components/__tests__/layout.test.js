import React from 'react';
import Layout from '../Layout';
import {shallow} from 'enzyme';

describe('<Layout /> component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Layout />)
  })
  
  it('render without chashing', () => {
    expect(wrapper);
  })

  it('render without children', () => {
    expect(wrapper.children()).toHaveLength(0)
  })

  it('render 1 child element', () => {
    wrapper = shallow(<Layout><div/></Layout>)
    expect(wrapper.children()).toHaveLength(1)
  })
})