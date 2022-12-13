export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=tt9d2yAyTQi2UayXhoaXSGP2fq3k7yiT&limit=10&q=${category}`;
  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
