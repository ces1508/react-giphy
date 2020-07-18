import React from 'react'
import GifGrid from '../../components/GifGrid'
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('<GifGrid />', () => {

  const initialCategory = 'goku'
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
    error: false
  })
  const wrapprer = shallow(<GifGrid category={initialCategory}/>)

  it('<GifGrid /> should be rendered', () => {
    expect(wrapprer).toMatchSnapshot()
  })

  it ('<GifGrid /> should be have a h3 with category as text', () => {
    const h3 = wrapprer.find('h3')

    expect(h3.text().trim()).toBe(initialCategory)
  })

  it ('<GifGrid /> should be have a loading text', () => {
    const loadingWrapper = wrapprer.find('p')

    expect(loadingWrapper.text()).toBe('Cargando ...')
  })

  it ('<GifGrid /> should have a p tag when useFetchGifs return an error', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: false,
      error: true
    })
    const wrapperWithError = shallow(<GifGrid category={initialCategory}/>)
    expect(wrapperWithError).toMatchSnapshot()

    const p = wrapperWithError.find('p')
    expect(p.text().trim()).toBe('ocurrio un error cargando los gifs')

  })

  it ('<GifGrid /> should have items when data is loaded', () => {

    const gifts = [{
      id: 1,
      title: 'first gift',
      url: 'https://someimage/image.gif'
    }]

    useFetchGifs.mockReturnValue({
      data: gifts,
      loading: false,
      error: false
    })
    const wrapperWithData = shallow(<GifGrid category={initialCategory}/>)


    expect(wrapperWithData).toMatchSnapshot()

    expect(wrapperWithData.find('p').exists()).toBeFalsy()
    expect(wrapperWithData.find('GifGridItem').length).toBe(gifts.length)

  })

})