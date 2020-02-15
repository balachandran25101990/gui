import React from 'react';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import Login from "../../components/Login"

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Login has 2 text boxes', () => {
  const wrapper = shallow(<Login />)
  expect(wrapper).toBeTruthy()
})