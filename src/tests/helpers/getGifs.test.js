import getGifs from '../../helpers/getGifs'

describe('test on helper/getGifts', () => {
  it ('should be return 10 images', async () => {
    const images = await getGifs('one puch man')
    expect(images.length).toBe(10)
  })

  it ('should be fail if dont send a category', async () => {
    await expect(getGifs()).rejects.toThrow()
  })
})