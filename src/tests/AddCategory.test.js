import React from 'react'
import{shallow}from 'enzyme'
import { AddCategory } from "../Components/AddCategory"


describe('AddCategory testing environment', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>)

    beforeEach(() =>{
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>)

    })

    test('should show correctly ', () => {
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should change textBox', () => {
        const input = wrapper.find('input');
        const value = 'hello World'
        input.simulate('change', {target: {value}})

        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    
    test('shouldnt return the submit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault() {}})
        expect(setCategories).not.toHaveBeenCalled()
    })
    
    
})