import React from 'react'
import {shallow} from 'enzyme'
import {GifGridItem} from '../../Components/GifGridItem'

describe('Gif Grid testing',() => {
    
    const title = 'The Title here'
    const url = 'https:/localhost/hello.png'
    const wrapper = shallow(<GifGridItem title={title}/>) 

    test('Should Veirfy if component shows correctly',() => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should have a paragraph with the title ', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

  //  test('should have image url', () => {
    //    const img = wrapper.find('img')
      //  expect(img.props().src).toBe(url)
    //})

    test('should have an animate__Bounce', () => {
        const div = wrapper.find('div') 
        expect(div.prop('className')).toBe('card animate__animated animate__bounce')
    })
}) 