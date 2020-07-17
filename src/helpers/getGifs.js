const getGifs = async category => {

  if (!category) throw new Error('you need send a category')

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mQyfl0YYKW18ivTdrxlpqZIGWvHIx1Wt`
  const res = await fetch(url)
  const { data } = await res.json()

  const gifs = data.map(el => ({
    id: el.id,
    title: el.title,
    url: el.images?.downsized_medium.url
  }))

  return gifs

}

export default getGifs
