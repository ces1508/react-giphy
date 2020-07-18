import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('<AddCategory />', () => {

  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>); // use for editor helps

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories}/>)
  })

  it('<AddCategory /> should be rendered', () =>{
    expect(wrapper).toMatchSnapshot()
  })


  it ('<AddCategory /> should be input value change when user put text', () => {
    const input = wrapper.find('input')
    const value = 'naruto'
    input.simulate('change', { target: { value } })

    const inputAfterChange = wrapper.find('input')
    expect(inputAfterChange.prop('value')).toBe(value)
  })

  it ('<AddCategory /> dont call setCategories function if inputValue is empty ', () => {
    const form = wrapper.find('form')

    form.simulate('submit', { preventDefault(){} })

    expect(setCategories).not.toHaveBeenCalled()

  })

  it ('<AddCategory /> setCategories will be called with parameters', () => {
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'naruto' } })

    const form = wrapper.find('form')
    form.simulate('submit', { preventDefault(){} })

    const inputAfterSubmit = wrapper.find('input')
    expect(inputAfterSubmit.prop('value')).toBe('')
    expect(setCategories).toHaveBeenCalled()

  })

})
