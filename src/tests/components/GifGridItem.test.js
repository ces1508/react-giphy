import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('<GifGridItem />', () => {

  const titleProps = 'title of image'
  const urlImageProps = 'https://image.com/example.jpg'

  const wrapper = shallow(
    <GifGridItem
      title={titleProps}
      url={urlImageProps} />
  )


  it ('renders <GifGridItem />', () =>  {
    expect(wrapper).toMatchSnapshot()
  })

  it('<GifGridItem /> should be have a p with title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(titleProps)
  })

  it ('<GifGridItem /> should be have an image with the url and alt send on props', () => {
    const image = wrapper.find('img')
    expect(image.prop('src')).toBe(urlImageProps)
    expect(image.prop('alt').trim()).toBe(titleProps)
  })

  it ('<GifGridItem /> should be have class card', () => {
    const divWrapper = wrapper.find('div').at(0)
    expect(divWrapper.hasClass('card')).toBe(true)
  })

  it ('<GifGridItem /> should be have class card-image', () => {
    const divWrapperImage = wrapper.find('div').at(1)
    expect(divWrapperImage.hasClass('card-image')).toBe(true)
  })
})
